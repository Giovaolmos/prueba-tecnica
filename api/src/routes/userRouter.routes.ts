import { Router } from "express";
import { createUserController } from "../controller/user/postUser.controller";
import { validateUserData } from "../middlewares/user/createUser.middleware";
import { validateLoginData } from "../middlewares/user/validateLoginData.middleware";
import { loginUserController } from "../controller/user/loginUser.controller";

export const userRouter = Router();

userRouter.post("/post", validateUserData, createUserController);
userRouter.post("/login", validateLoginData, loginUserController);
