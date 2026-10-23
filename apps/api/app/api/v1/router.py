from fastapi import APIRouter
from typing import List
from app.schemas.schemas import PantryMatchRequest, RecipeMatchResponse

api_router = APIRouter()

@api_router.get("/health")
def health_check():
    return {"status": "ok", "app": "VibeHost Assistant API", "version": "1.0.0"}

@api_router.post("/pantry/match", response_model=List[RecipeMatchResponse])
def match_pantry_items(request: PantryMatchRequest):
    """
    Endpoint gợi ý món ăn dựa trên nguyên liệu sẵn có trong tủ lạnh (Pantry Match)
    """
    # Demo logic response khi chưa nạp cơ sở dữ liệu
    return []
