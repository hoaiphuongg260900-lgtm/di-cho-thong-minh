export type DietaryPreference = 'Standard' | 'Keto' | 'Eat Clean' | 'Chay' | 'Low Carb';

export interface Recipe {
  id: string;
  title: string;
  description?: string;
  instructions: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  totalCalories: number;
  dietaryTags?: string[];
  imageUrl?: string;
}

export interface MealPlanItem {
  id: string;
  date: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  recipe: Recipe;
  servings: number;
  isCompleted: boolean;
}

export type ExpiryStatus = 'fresh' | 'warning' | 'urgent';

export interface PantryItem {
  id: string;
  name: string;
  category: 'Rau củ' | 'Thịt & Hải sản' | 'Gia vị' | 'Đồ khô' | 'Khác';
  quantity: number;
  unit: string;
  purchaseDate: string;
  expiryDate?: string;
  daysRemaining?: number;
  status: ExpiryStatus;
  storageLocation: 'Ngăn mát' | 'Ngăn đông' | 'Tủ bếp';
}

export interface ShoppingItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  isPurchased: boolean;
  estimatedPrice: number;
  actualPrice?: number;
}

export interface ShoppingList {
  id: string;
  title: string;
  dateRange: string;
  items: ShoppingItem[];
  totalEstimatedCost: number;
  totalActualCost: number;
}

export interface BudgetOverview {
  periodType: 'weekly' | 'monthly';
  targetLimit: number;
  currentSpent: number;
  remaining: number;
  percentageUsed: number;
}
