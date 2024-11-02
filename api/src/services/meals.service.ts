import { Meal } from "../models/meals.model";
import { CreateMealDto } from "../dtos/meal/createMeal.dto";
import { UpdateMealDto } from "../dtos/meal/updateMeal.dto";
import { IMeal } from "../interfaces/meals.interface";

export const createMealService = async (
  data: CreateMealDto,
): Promise<IMeal> => {
  try {
    const newMeal = await Meal.create(data);
    return newMeal;
  } catch (error) {
    throw new Error("Error creating meal");
  }
};

export const getAllMealsService = async (): Promise<IMeal[]> => {
  try {
    const mealsDB = await Meal.find();
    if (mealsDB.length === 0) throw new Error(`No existen películas`);
    return mealsDB;
  } catch (error) {
    throw new Error("Error fetching meals");
  }
};

export const getMealByIdService = async (id: string): Promise<IMeal | null> => {
  try {
    const meal = await Meal.findById(id);
    if (!meal) throw new Error(`Meal with ID ${id} not found`);
    return meal;
  } catch (error) {
    throw new Error("Error fetching meal by ID");
  }
};

export const updateMealService = async (
  id: string,
  data: UpdateMealDto,
): Promise<IMeal | null> => {
  try {
    const meal = await Meal.findByIdAndUpdate(id, data, { new: true });
    if (!meal) throw new Error(`Meal with ID ${id} not found`);
    return meal;
  } catch (error) {
    throw new Error("Error updating meal");
  }
};

export const deleteMealService = async (id: string): Promise<IMeal | null> => {
  try {
    const meal = await Meal.findByIdAndDelete(id);
    if (!meal) throw new Error(`Meal with ID ${id} not found`);
    return meal;
  } catch (error) {
    throw new Error("Error deleting meal");
  }
};
