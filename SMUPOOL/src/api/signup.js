import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://43.202.8.75:8080/api/v1", // API 서버의 기본 URL 설정
  headers: {
    "Content-Type": "application/json",
  },
});

export const signup = async (studentId, password) => {
  try {
    const response = await apiClient.post("/signup", {
      name: "string",
      email: studentId,
      password: password,
      nickname: "string",
    });
    console.log(response);
    return response.data;
  } catch (error) {
    const errMessage = error.response && error.response.data ? error.response.data : error.message;
    throw new Error(errMessage);
  }
};
