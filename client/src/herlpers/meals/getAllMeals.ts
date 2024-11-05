import axios from "axios";
const URL_BACKEND = import.meta.env.VITE_BACK_URL;
export const URL_MEALS = `${URL_BACKEND}/meals`;

export const getAllMeals = async (page = 1, limit = 12) => {
  try {
    const response = await axios.get(`${URL_MEALS}/get`, {
      params: { page, limit },
    });
    const { data, totalMeals } = response.data;
    return { meals: data, totalMeals };
  } catch (error: any) {
    return error.response?.data?.message;
  }
};
