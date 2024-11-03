import { Router } from "express";
import { createUserController } from "../controller/user/postUser.controller";
import { validateUserData } from "../middlewares/user/createUser.middleware";

export const userRouter = Router();

userRouter.post("/post", validateUserData, createUserController);
