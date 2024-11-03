import { IMeal } from "../../interfaces/meals";
import { Meal } from "../../models/meal";

export const getMealsService = async (
  page: number,
  limit: number,
): Promise<IMeal[]> => {
  const skip = (page - 1) * limit;
  return await Meal.find().skip(skip).limit(limit);
};
export const getMealByIdService = async (id: string): Promise<IMeal | null> => {
  const meal = await Meal.findById(id);
  return meal;
};
