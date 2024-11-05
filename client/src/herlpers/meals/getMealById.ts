import axios from "axios";
import { URL_MEALS } from "./getAllMeals";

export const getMealById = async (id: string) => {
  try {
    const response = await axios.get(`${URL_MEALS}/${id}`);
    return response.data;
  } catch (error: any) {
    return error.response?.data?.message;
  }
};
