import { Meal } from "../../models/meal";
import { IMeal } from "../../interfaces/meals";

export const updateMealService = async (
  id: string,
  updateData: Partial<IMeal>,
): Promise<IMeal | null> => {
  try {
    const updatedMeal = await Meal.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return updatedMeal;
  } catch (error) {
    throw new Error(`Error al actualizar la comida: ${error.message}`);
  }
};
