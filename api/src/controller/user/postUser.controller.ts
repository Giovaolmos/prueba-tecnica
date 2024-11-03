import { Request, Response } from "express";
import { createUserDto } from "../../dtos/user/createUser.dto";
import { createUserService } from "../../services/user/postUser.service";
import { IUser } from "../../interfaces/user";
export const createUserController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const newUserData: createUserDto = req.body;
    const newUser: IUser = await createUserService(newUserData);

    const newUserResponse = newUser.toObject();
    delete newUserResponse.isAdmin;
    res.status(201).json(newUserResponse);
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el usuario",
      error: error instanceof Error ? error.message : error,
    });
  }
};
