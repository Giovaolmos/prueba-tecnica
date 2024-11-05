import axios from "axios";
import { URL_MEALS } from "./getAllMeals";

export const createMeals = async (
  name: string,
  category: string,
  description: string,
  imageUrl: string,
) => {
  try {
    const response = await axios.post(`${URL_MEALS}/post`, {
      name,
      category,
      description,
      imageUrl,
    });
    return response.data;
  } catch (error: any) {
    console.error("Error en la creación de la comida:", error);
    return error.response?.data?.message || "Error desconocido";
  }
};
