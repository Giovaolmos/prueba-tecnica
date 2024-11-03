import { NextFunction, Request, Response } from "express";
import { createUserDto } from "../../dtos/user/createUser.dto";

export const validateUserData = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const createUser: createUserDto = req.body;
  const missingFields: string[] = [];

  if (!createUser.name) missingFields.push("name");
  if (!createUser.email) missingFields.push("email");
  if (!createUser.password) missingFields.push("password");
  if (!createUser.confirmPassword) missingFields.push("confirmPassword");

  if (missingFields.length > 0) {
    res.status(400).json({
      message: "Faltan los siguientes campos:",
      missingFields,
    });
    return;
  }

  if (createUser.password !== createUser.confirmPassword) {
    res.status(400).json({
      message: "La contraseña y su confirmación no coinciden.",
    });
    return;
  }

  next();
};
