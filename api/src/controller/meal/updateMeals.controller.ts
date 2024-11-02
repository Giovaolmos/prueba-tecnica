import { Request, Response } from "express";
import { updateMealService } from "../../services/meal/putMeal.service"; // Asegúrate de que la ruta sea correcta

export const updateMealController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;

  try {
    const updatedMeal = await updateMealService(id, updateData);

    if (!updatedMeal) {
      return res
        .status(404)
        .json({ message: "No se encontró la comida para actualizar" });
    }

    return res.status(200).json(updatedMeal);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al actualizar la comida", error: error.message });
  }
};
