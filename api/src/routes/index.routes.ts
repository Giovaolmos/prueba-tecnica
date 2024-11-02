import { Router } from "express";
import { mealsRouter } from "./meals.routes";

export const indexRouter = Router();
indexRouter.use("/meals", mealsRouter);
