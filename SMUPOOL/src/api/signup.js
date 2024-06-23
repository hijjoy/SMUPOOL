import { axiosInstance } from "./axios";

const signup = async ({ name, email, password, nickname }) => {
  const { data } = await axiosInstance.post(`/api/v1/users/signup`, {
    name,
    email,
    password,
    nickname,
  });
  return data;
};

export { signup };
