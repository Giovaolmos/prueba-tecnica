import { Request, Response } from "express";
import { getMealsService } from "../../services/meal/getsMeal.service";

export const getAllMealsController = async (req: Request, res: Response) => {
  const mealsDB = await getMealsService();

  if (mealsDB.length === 0) {
    res.status(404).json({ message: "No se encontraron comidas" });
  } else {
    res.status(200).json(mealsDB);
  }
};
