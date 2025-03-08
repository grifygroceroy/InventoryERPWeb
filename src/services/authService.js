import { LOGIN_URL } from "../utility/constant";
import axios from "axios";

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${LOGIN_URL}`, credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Login failed!";
  }
};