import { Request, Response, NextFunction } from "express";

export const validateLoginData = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { email, password } = req.body;
  const missingFields: string[] = [];

  if (!email) missingFields.push("email");
  if (!password) missingFields.push("password");

  if (missingFields.length > 0) {
    res.status(400).json({
      message: "Faltan los siguientes campos:",
      missingFields,
    });
    return;
  }

  next();
};
