import axios from "axios";

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
};

const axiosInstance = axios.create({
  baseURL: "http://43.202.8.75:8080",
  headers: header,
});

export { axiosInstance };
