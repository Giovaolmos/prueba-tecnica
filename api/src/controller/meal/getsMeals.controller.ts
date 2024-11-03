import { Request, Response } from "express";
import {
  getMealByIdService,
  getMealsService,
} from "../../services/meal/getsMeal.service";

export const getAllMealsController = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const mealsDB = await getMealsService(page, limit);

  if (mealsDB.length === 0) {
    res.status(204).json({ message: "No se encontraron comidas" });
  } else {
    res.status(200).json({
      data: mealsDB,
      page,
      limit,
    });
  }
};
export const getMealByIdController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const mealDB = await getMealByIdService(id);
  if (!mealDB) {
    return res
      .status(404)
      .json({ message: "No se encontró la comida con el ID solicitado" });
  }
  return res.status(200).json(mealDB);
};
