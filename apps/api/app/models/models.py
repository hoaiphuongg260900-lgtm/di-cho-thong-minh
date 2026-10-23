import uuid
from datetime import datetime, date
from sqlalchemy import (
    Column, String, Text, Integer, Float, Boolean, 
    DateTime, Date, ForeignKey, Enum as SQLEnum
)
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.core.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String(255), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    full_name = Column(String(100), nullable=True)
    family_members = Column(Integer, default=2)
    dietary_preference = Column(String(50), default="Standard")  # Keto, Eat Clean, Chay, etc.
    monthly_budget = Column(Float, default=0.0)
    created_at = Column(DateTime, default=datetime.utcnow)

    pantry_items = relationship("PantryItem", back_populates="user", cascade="all, delete-orphan")
    meal_plans = relationship("MealPlan", back_populates="user", cascade="all, delete-orphan")
    shopping_lists = relationship("ShoppingList", back_populates="user", cascade="all, delete-orphan")
    budgets = relationship("Budget", back_populates="user", cascade="all, delete-orphan")

class Ingredient(Base):
    __tablename__ = "ingredients"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(100), unique=True, index=True, nullable=False)
    category = Column(String(50), nullable=False)  # Rau củ, Thịt cá, Gia vị, Đồ khô...
    standard_unit = Column(String(20), nullable=False)  # g, kg, ml, quả...
    calories_per_unit = Column(Float, default=0.0)
    default_shelf_life_days = Column(Integer, default=7)

class Recipe(Base):
    __tablename__ = "recipes"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = Column(String(200), index=True, nullable=False)
    description = Column(Text, nullable=True)
    instructions = Column(Text, nullable=False)
    prep_time_minutes = Column(Integer, default=15)
    cook_time_minutes = Column(Integer, default=30)
    servings = Column(Integer, default=2)
    total_calories = Column(Float, default=0.0)
    dietary_tags = Column(String(100), nullable=True)  # Keto, Clean, Chay
    image_url = Column(String(500), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    ingredients = relationship("RecipeIngredient", back_populates="recipe", cascade="all, delete-orphan")

class RecipeIngredient(Base):
    __tablename__ = "recipe_ingredients"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    recipe_id = Column(UUID(as_uuid=True), ForeignKey("recipes.id"), nullable=False)
    ingredient_id = Column(UUID(as_uuid=True), ForeignKey("ingredients.id"), nullable=False)
    quantity = Column(Float, nullable=False)
    unit = Column(String(20), nullable=False)

    recipe = relationship("Recipe", back_populates="ingredients")
    ingredient = relationship("Ingredient")

class MealPlan(Base):
    __tablename__ = "meal_plans"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    recipe_id = Column(UUID(as_uuid=True), ForeignKey("recipes.id"), nullable=False)
    plan_date = Column(Date, nullable=False, index=True)
    meal_type = Column(String(20), nullable=False)  # breakfast, lunch, dinner, snack
    servings = Column(Integer, default=2)
    is_completed = Column(Boolean, default=False)

    user = relationship("User", back_populates="meal_plans")
    recipe = relationship("Recipe")

class PantryItem(Base):
    __tablename__ = "pantry_items"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    ingredient_id = Column(UUID(as_uuid=True), ForeignKey("ingredients.id"), nullable=True)
    custom_name = Column(String(100), nullable=False)
    category = Column(String(50), default="Khác")
    quantity = Column(Float, nullable=False, default=1.0)
    unit = Column(String(20), default="món")
    purchase_date = Column(Date, default=date.today)
    expiry_date = Column(Date, nullable=True, index=True)
    storage_location = Column(String(50), default="Ngăn mát")  # Ngăn đông, Ngăn mát, Tủ bếp
    status = Column(String(20), default="in_stock")  # in_stock, used, expired

    user = relationship("User", back_populates="pantry_items")
    ingredient = relationship("Ingredient")

class ShoppingList(Base):
    __tablename__ = "shopping_lists"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    title = Column(String(150), default="Danh sách đi chợ tuần")
    status = Column(String(20), default="active")  # active, completed
    total_estimated_cost = Column(Float, default=0.0)
    total_actual_cost = Column(Float, default=0.0)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="shopping_lists")
    items = relationship("ShoppingItem", back_populates="shopping_list", cascade="all, delete-orphan")

class ShoppingItem(Base):
    __tablename__ = "shopping_items"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    shopping_list_id = Column(UUID(as_uuid=True), ForeignKey("shopping_lists.id"), nullable=False)
    ingredient_id = Column(UUID(as_uuid=True), ForeignKey("ingredients.id"), nullable=True)
    name = Column(String(100), nullable=False)
    category = Column(String(50), default="Khác")  # Rau củ, Thịt tươi, Gia vị...
    quantity = Column(Float, default=1.0)
    unit = Column(String(20), default="phần")
    is_purchased = Column(Boolean, default=False)
    estimated_price = Column(Float, default=0.0)
    actual_price = Column(Float, default=0.0)

    shopping_list = relationship("ShoppingList", back_populates="items")

class Budget(Base):
    __tablename__ = "budgets"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    period_type = Column(String(20), default="weekly")  # weekly, monthly
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)
    target_limit = Column(Float, nullable=False)
    current_spent = Column(Float, default=0.0)

    user = relationship("User", back_populates="budgets")
