import axios from "axios";

const URL_BACKEND = import.meta.env.VITE_BACK_URL;
export const URL_USER = `${URL_BACKEND}/user`;

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${URL_USER}/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error: any) {
    return {
      message:
        error.response?.data?.message || "Error trying signin. Try again.",
    };
  }
};
