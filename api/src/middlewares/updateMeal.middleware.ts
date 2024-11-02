import { Request, Response, NextFunction } from "express";
import { IMeal } from "../interfaces/meals";
export const validateMealUpdate = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const validateData: IMeal = req.body;

  if (
    !validateData.name &&
    !validateData.description &&
    !validateData.imageUrl &&
    !validateData.category
  ) {
    return res.status(400).json({
      message: "Necesitas ingresar al menos 1 campo para actualizar",
    });
  }
  next();
};
