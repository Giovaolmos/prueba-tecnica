import { Request, Response } from "express";
import { CreateMealDto } from "../../dtos/meal/createMeals.dto";
import { createMealService } from "../../services/meal/postMeal.service";

export const createMealController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const newMealData: CreateMealDto = req.body;

  try {
    const newMeal = await createMealService(newMealData);
    res.status(201).json(newMeal);
  } catch (error) {
    res.status(500).json({
      message: "Error al crear la comida",
      error: error instanceof Error ? error.message : error,
    });
  }
};
