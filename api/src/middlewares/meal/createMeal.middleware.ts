import { NextFunction, Request, Response } from "express";
import { CreateMealDto } from "../../dtos/meal/createMeals.dto";

export const validateMealData = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const createMealDto: CreateMealDto = req.body;
  const missingFields: string[] = [];

  if (!createMealDto.name) missingFields.push("name");
  if (!createMealDto.description) missingFields.push("description");
  if (!createMealDto.imageUrl) missingFields.push("imageUrl");
  if (!createMealDto.category) missingFields.push("category");

  if (missingFields.length > 0) {
    res.status(400).json({
      message: "Faltan los siguientes campos:",
      missingFields,
    });
    return;
  }

  next();
};
