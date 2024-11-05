import { IMeals } from "../../interfaces/meals";
import { URL_MEALS } from "./getAllMeals";
import axios from "axios";

export const updateMeal = async (id: string, body: Partial<IMeals>) => {
  try {
    const response = await axios.put(`${URL_MEALS}/put/${id}`, body);
    const updatedMeal = await response.data;
    return updatedMeal;
  } catch (error: any) {
    return (
      error.response?.data?.message || "Error trying to update meal. Try again."
    );
  }
};
