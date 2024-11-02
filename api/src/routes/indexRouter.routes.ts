import { Router } from "express";
import { mealsRouter } from "./mealsRouter.routes";

export const indexRouter = Router();
indexRouter.use("/meals", mealsRouter);
