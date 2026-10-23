from typing import List, Dict
from sqlalchemy.orm import Session
from app.models.models import Recipe, RecipeIngredient, Ingredient
from app.schemas.schemas import RecipeMatchResponse

class PantryMatcherService:
    @staticmethod
    def match_recipes(db: Session, available_ingredient_names: List[str], max_missing: int = 2) -> List[RecipeMatchResponse]:
        """
        Thuật toán đối soát nguyên liệu trong tủ lạnh với kho công thức (Pantry Match Engine)
        Ưu tiên các món ăn tận dụng tối đa đồ cũ và có tỷ lệ khớp nguyên liệu cao nhất.
        """
        cleaned_available = [name.strip().lower() for name in available_ingredient_names]
        recipes = db.query(Recipe).all()
        results: List[RecipeMatchResponse] = []

        for recipe in recipes:
            recipe_ingredients = [
                ri.ingredient.name.strip().lower() 
                for ri in recipe.ingredients 
                if ri.ingredient
            ]
            if not recipe_ingredients:
                continue

            available_matched = [ing for ing in recipe_ingredients if any(avail in ing or ing in avail for avail in cleaned_available)]
            missing = [ing for ing in recipe_ingredients if ing not in available_matched]

            if len(missing) <= max_missing:
                match_percentage = round((len(available_matched) / len(recipe_ingredients)) * 100, 1)
                results.append(
                    RecipeMatchResponse(
                        recipe_id=recipe.id,
                        title=recipe.title,
                        cook_time_minutes=recipe.cook_time_minutes,
                        match_percentage=match_percentage,
                        available_ingredients=available_matched,
                        missing_ingredients=missing,
                        image_url=recipe.image_url
                    )
                )

        # Sắp xếp kết quả theo tỷ lệ khớp từ cao xuống thấp
        results.sort(key=lambda x: x.match_percentage, reverse=True)
        return results
