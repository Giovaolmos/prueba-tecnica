import { IMeal } from "../../interfaces/meals";
import { Meal } from "../../models/meal";

export const getMealsService = async (): Promise<IMeal[]> => {
  return await Meal.find();
};
