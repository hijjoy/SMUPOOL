import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://43.202.8.75:8080", // API 서버의 기본 URL 설정
  headers: {
    "Content-Type": "application/json",
  },
});

const signup = async ({ name, email, password, nickname }) => {
  const { data } = await apiClient.post(`/api/v1/users/signup`, {
    name,
    email,
    password,
    nickname,
  });
  return data;
};

export { signup };
