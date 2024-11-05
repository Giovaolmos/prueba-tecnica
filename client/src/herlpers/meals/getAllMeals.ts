import axios from "axios";

export const URL_MEALS = "http://localhost:3000/meals";

export const getAllMeals = async (page = 1, limit = 12) => {
  try {
    const response = await axios.get(`${URL_MEALS}/get`, {
      params: { page, limit },
    });
    const { data, totalMeals } = response.data;
    return { meals: data, totalMeals };
  } catch (error: any) {
    throw new Error(error);
  }
};
