import { Request, Response } from "express";
import { deleteMealService } from "../../services/meal/deleteMeal.service";

export const deleteMealController = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    await deleteMealService(id);
    return res.status(204).send();
  } catch (error) {
    if (error.message === `No se encontró la comida con el ID: ${id}`) {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({ message: "Error al eliminar la comida" });
  }
};
