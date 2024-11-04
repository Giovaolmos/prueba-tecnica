import { Router } from "express";
import { postMealRouter } from "./postrouter.routes";
import { getAllRouter } from "./getAllRouter.routes";
import { getByIdRouter } from "./getByIdRouter.routes";
import { putMealRouter } from "./putMealRouter.routes";
import { deleteMealRouter } from "./deleteMealRouter.routes";

export const mealsRouter = Router();
mealsRouter.use("/", postMealRouter);
mealsRouter.use("/", getAllRouter);
mealsRouter.use("/", getByIdRouter);
mealsRouter.use("/", putMealRouter);
mealsRouter.use("/", deleteMealRouter);
