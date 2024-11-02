import { NextFunction, Request, Response } from "express";
import {
  getMealByIdService,
  getMealsService,
} from "../../services/meal/getsMeal.service";
import mongoose from "mongoose";

export const getAllMealsController = async (req: Request, res: Response) => {
  const mealsDB = await getMealsService();

  if (mealsDB.length === 0) {
    res.status(204).json({ message: "No se encontraron comidas" });
  } else {
    res.status(200).json(mealsDB);
  }
};
export const getMealByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    const mealDB = await getMealByIdService(id);
    if (!mealDB) {
      return res
        .status(404)
        .json({ message: "No se encontró la comida con el ID solicitado" });
    }
    return res.status(200).json(mealDB);
  } catch (error) {
    next(error);
  }
};
