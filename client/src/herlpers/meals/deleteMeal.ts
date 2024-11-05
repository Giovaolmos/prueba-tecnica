import { URL_MEALS } from "./getAllMeals";
import axios from "axios";

export const deleteMeal = async (id: string) => {
  try {
    const response = await axios.delete(`${URL_MEALS}/delete/${id}`);
    const data = await response.data;
    return data;
  } catch (error: any) {
    return error.response?.data?.message || "Error desconocido";
  }
};
