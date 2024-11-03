import axios from "axios";
import { Meal } from "../../models/meal";
import { API_URL } from "../../config/envs";
import { IMeal } from "../../interfaces/meals";

export const preLoadMeals = async (): Promise<void> => {
  try {
    const mealsDB = await Meal.find();
    if (mealsDB.length > 0) {
      console.log("No se requiere precarga.");
      return;
    }

    const response = await axios.get(API_URL);
    let mealsData = response.data.meals;
    if (!mealsData) {
      throw new Error("Error al extraer datos de la API");
    }

    mealsData = mealsData.slice(0, 20);

    const meals = mealsData.map((meal) => ({
      name: meal.strMeal,
      description: meal.strInstructions,
      imageUrl: meal.strMealThumb,
      category: meal.strCategory,
    }));
    await Meal.insertMany(meals);
    console.log("Precarga de comida realizada con éxito.");
  } catch (error: any) {
    throw new Error(`Error al realiar la precarga de comida. ${error.message}`);
  }
};
