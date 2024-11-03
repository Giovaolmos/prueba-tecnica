import { Meal } from "../../models/meal";

export const deleteMealService = async (id: string): Promise<void> => {
  const deleted = await Meal.findByIdAndDelete(id);
  if (!deleted) throw new Error(`No se encontró la comida con el ID: ${id}`);
};
