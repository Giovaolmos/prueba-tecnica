import { Router } from "express";
import { createMealController } from "../controller/meal/createMeals.controller";
import { validateMealData } from "../middlewares/createMeal.middleware";
import {
  getAllMealsController,
  getMealByIdController,
} from "../controller/meal/getsMeals.controller";
import { validateMealUpdate } from "../middlewares/updateMeal.middleware";
import { validateIdMiddleware } from "../middlewares/validateId.middleware";
import { updateMealController } from "../controller/meal/updateMeals.controller";
import { deleteMealController } from "../controller/meal/deleteMeals.controller";

export const mealsRouter = Router();
mealsRouter.post("/post", validateMealData, createMealController);
mealsRouter.get("/", getAllMealsController);
mealsRouter.get("/:id", validateIdMiddleware, getMealByIdController);
mealsRouter.put(
  "/put/:id",
  validateIdMiddleware,
  validateMealUpdate,
  updateMealController,
);
mealsRouter.delete("/delete/:id", validateIdMiddleware, deleteMealController);
