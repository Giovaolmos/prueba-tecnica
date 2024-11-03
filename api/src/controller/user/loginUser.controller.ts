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
    if (error.message === "Email y/o contraseña incorrectos.") {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({
        message: "Hubo un error inesperado al intentar iniciar sesión",
        error: error instanceof Error ? error.message : error,
      });
    }
  }
};
