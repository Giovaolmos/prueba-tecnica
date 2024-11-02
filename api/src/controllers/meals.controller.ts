import { Request, Response } from "express";
import {
  createMealService,
  getAllMealsService,
  getMealByIdService,
  updateMealService,
  deleteMealService,
} from "../services/meals.service";
import { CreateMealDto } from "../dtos/meal/createMeal.dto";
import { UpdateMealDto } from "../dtos/meal/updateMeal.dto";

export const createMealController = async (req: Request, res: Response) => {
  try {
    const createMealDto: CreateMealDto = req.body;
    const newMeal = await createMealService(createMealDto);
    return res.status(201).json(newMeal);
  } catch (error: any) {
    return res.status(500).json({ message: "Error creating meal" });
  }
};

export const getAllMealsController = async (req: Request, res: Response) => {
  try {
    const meals = await getAllMealsService();
    return res.status(200).json(meals);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMealByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const meal = await getMealByIdService(id);
    return res.status(200).json(meal);
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateMealController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateMealDto: UpdateMealDto = req.body;
  try {
    const updatedMeal = await updateMealService(id, updateMealDto);
    return res.status(200).json(updatedMeal);
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteMealController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const { id } = req.params;
  try {
    await deleteMealService(id);
    return res.status(204).send();
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
