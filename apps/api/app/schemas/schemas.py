from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import date, datetime
from uuid import UUID

# User Schemas
class UserBase(BaseModel):
    email: EmailStr
    full_name: Optional[str] = None
    family_members: int = 2
    dietary_preference: str = "Standard"
    monthly_budget: float = 0.0

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: UUID
    created_at: datetime
    class Config:
        from_attributes = True

# Pantry Schemas
class PantryItemBase(BaseModel):
    custom_name: str
    category: str = "Khác"
    quantity: float = 1.0
    unit: str = "món"
    purchase_date: date = date.today()
    expiry_date: Optional[date] = None
    storage_location: str = "Ngăn mát"
    status: str = "in_stock"

class PantryItemCreate(PantryItemBase):
    ingredient_id: Optional[UUID] = None

class PantryItemResponse(PantryItemBase):
    id: UUID
    user_id: UUID
    ingredient_id: Optional[UUID] = None
    class Config:
        from_attributes = True

# Pantry Match Request & Response
class PantryMatchRequest(BaseModel):
    pantry_item_names: List[str]
    max_missing_ingredients: int = 2

class RecipeMatchResponse(BaseModel):
    recipe_id: UUID
    title: str
    cook_time_minutes: int
    match_percentage: float
    available_ingredients: List[str]
    missing_ingredients: List[str]
    image_url: Optional[str] = None

# Meal Plan Schemas
class MealPlanCreate(BaseModel):
    recipe_id: UUID
    plan_date: date
    meal_type: str
    servings: int = 2

class MealPlanResponse(BaseModel):
    id: UUID
    recipe_id: UUID
    plan_date: date
    meal_type: str
    servings: int
    is_completed: bool
    class Config:
        from_attributes = True

# Shopping List Schemas
class ShoppingItemCreate(BaseModel):
    name: str
    category: str = "Khác"
    quantity: float = 1.0
    unit: str = "phần"
    estimated_price: float = 0.0

class ShoppingItemResponse(ShoppingItemCreate):
    id: UUID
    is_purchased: bool
    actual_price: float
    class Config:
        from_attributes = True

class ShoppingListResponse(BaseModel):
    id: UUID
    title: str
    status: str
    total_estimated_cost: float
    total_actual_cost: float
    items: List[ShoppingItemResponse] = []
    class Config:
        from_attributes = True

# Budget Schemas
class BudgetCreate(BaseModel):
    period_type: str = "weekly"
    start_date: date
    end_date: date
    target_limit: float

class BudgetResponse(BudgetCreate):
    id: UUID
    current_spent: float
    class Config:
        from_attributes = True
