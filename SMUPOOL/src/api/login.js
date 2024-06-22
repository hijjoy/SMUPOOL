import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api", // API 서버의 기본 URL 설정
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (studentId, password) => {
  try {
    const response = await apiClient.post("/login", {
      studentId,
      password,
    });
    return response.data; // 서버에서 반환된 데이터를 반환
  } catch (error) {
    throw error.response.data; // 에러 발생 시 에러 데이터를 반환
  }
};
