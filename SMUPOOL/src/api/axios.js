import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://43.202.8.75:8080",
});

export { axiosInstance };
