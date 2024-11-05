import { Request, Response } from "express";
import { loginUserService } from "../../services/user/loginUser.service";

export const loginUserController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const loginData = req.body;
    const result = await loginUserService(loginData);
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ message: "Credenciales incorrectas." });
  }
};
