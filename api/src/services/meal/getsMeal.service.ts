import { IMeal } from "../../interfaces/meals";
import { Meal } from "../../models/meal";

export const getMealsService = async (): Promise<IMeal[]> => {
  return await Meal.find();
};
export const getMealByIdService = async (id: string): Promise<IMeal | null> => {
  const meal = await Meal.findById(id);
  return meal;
};
