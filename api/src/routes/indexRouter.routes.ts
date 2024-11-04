import { Router } from "express";
import { mealsRouter } from "./meals/mealsIndexRouter.routes";
import { userRouter } from "./user/userRouter.routes";

export const indexRouter = Router();
indexRouter.use("/meals", mealsRouter);
indexRouter.use("/user", userRouter);
