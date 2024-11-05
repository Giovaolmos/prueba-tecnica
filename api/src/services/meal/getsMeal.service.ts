import { IMeal } from "../../interfaces/meals";
import { Meal } from "../../models/meal";

export const getMealsService = async (
  page: number,
  limit: number,
): Promise<{ meals: IMeal[]; totalMeals: number }> => {
  const skip = (page - 1) * limit;

  const [meals, totalMeals] = await Promise.all([
    Meal.find().skip(skip).limit(limit),
    Meal.countDocuments(),
  ]);

  return { meals, totalMeals };
};

export const getMealByIdService = async (id: string): Promise<IMeal | null> => {
  const meal = await Meal.findById(id);
  return meal;
};
