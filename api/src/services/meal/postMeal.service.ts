import { CreateMealDto } from "../../dtos/meal/createMeals.dto";
import { IMeal } from "../../interfaces/meals";
import { Meal } from "../../models/meal";

export const createMealService = async (
  mealData: CreateMealDto,
): Promise<IMeal> => {
  const newMeal = await Meal.create(mealData);
  return newMeal.save();
};
