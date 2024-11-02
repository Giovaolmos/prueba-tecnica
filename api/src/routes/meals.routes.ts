import { Router } from "express";
import {
  createMealController,
  getAllMealsController,
  getMealByIdController,
  updateMealController,
  deleteMealController,
} from "../controllers/meals.controller";

export const mealsRouter = Router();

mealsRouter.post("/post", createMealController);
mealsRouter.get("/", getAllMealsController);
mealsRouter.get("/:id", getMealByIdController);
mealsRouter.put("/update/:id", updateMealController);
mealsRouter.delete("/delete/:id", deleteMealController);
