import { Router } from "express";
import { mealsRouter } from "./mealsRouter.routes";
import { userRouter } from "./userRouter.routes";

export const indexRouter = Router();
indexRouter.use("/meals", mealsRouter);
indexRouter.use("/user", userRouter);
