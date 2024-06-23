import { axiosInstance } from "./axios";

const login = async ({ email, password }) => {
  const { data } = await axiosInstance.post(`/api/v1/users/login`, {
    email,
    password,
  });
  return data;
};

const logout = async () => {
  const { data } = await axiosInstance.post(`/api/v1/users/logout`);
  return data;
};

const userPatch = async ({ userId, userData }) => {
  try {
    const res = await axiosInstance.patch(`/api/v1/users/${userId}`, userData);
    console.log(userData);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (userId) => {
  try {
    const res = await axiosInstance.delete(`/api/v1/users/${userId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { login, logout, userPatch, deleteUser };
