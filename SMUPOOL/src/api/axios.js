import axios from "axios";

const { VITE_TOKEN } = import.meta.env;

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${VITE_TOKEN}`,
};

const axiosInstance = axios.create({
  baseURL: "http://43.202.8.75:8080",
  headers: header,
});

export { axiosInstance };
