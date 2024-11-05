import axios from "axios";

export const URL_MEALS = "http://localhost:3000/meals";

export const getAllMeals = async () => {
  try {
    const response = await axios.get(`${URL_MEALS}/get`);
    const meals = await response.data.data;
    return meals;
  } catch (error: any) {
    throw new Error(error);
  }
};
