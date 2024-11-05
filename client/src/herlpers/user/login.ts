import axios from "axios";

export const URL_USER = "http://localhost:3000/user";

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
