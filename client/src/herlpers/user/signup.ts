import { URL_USER } from "./login";
import axios from "axios";

export const signup = async (
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
) => {
  try {
    const response = await axios.post(`${URL_USER}/post`, {
      name,
      email,
      password,
      confirmPassword,
    });
    const data = await response.data;
    return data;
  } catch (error: any) {
    return {
      message:
        error.response?.data?.message || "Error trying register. Try again.",
    };
  }
};
