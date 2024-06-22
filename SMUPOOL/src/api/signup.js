import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000", // API 서버의 기본 URL 설정
  headers: {
    "Content-Type": "application/json",
  },
});

export const signup = async (studentId, password) => {
  try {
    const response = await apiClient.post("/signup", {
      studentId,
      password,
    });
    return response.data;
  } catch (error) {
    const errMessage = error.response && error.response.data ? error.response.data : error.message;
    throw new Error(errMessage);
  }
};
