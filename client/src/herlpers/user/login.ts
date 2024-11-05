import axios from "axios";

export const URL_USER = "http://localhost:3000/user";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${URL_USER}/login`, {
      email,
      password,
    });
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    return error.response?.data?.message;
  }
};
