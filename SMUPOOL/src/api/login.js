import axios from "axios";
import { axiosInstance } from "./axios";

const apiClient = axios.create({
  baseURL: "http://43.202.8.75:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

const login = async ({ email, password }) => {
  const { data } = await apiClient.post(`/api/v1/users/login`, {
    email,
    password,
  });
  return data;
};

const logout = async () => {
  const { data } = await axiosInstance.post(`/api/v1/users/logout`);
  return data;
};

export { login, logout };
