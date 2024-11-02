import { Router } from "express";
import { createMealController } from "../controller/meal/createMeals.controller";
import { validateMealData } from "../middlewares/createMeal.middleware";
import { getAllMealsController } from "../controller/meal/getsMeals.controller";

export const mealsRouter = Router();
mealsRouter.post("/post", validateMealData, createMealController);
mealsRouter.get("/", getAllMealsController);
