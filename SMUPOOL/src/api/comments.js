import { axiosInstance } from "./axios";

const getComments = async (id) => {
  try {
    const res = await axiosInstance.get(`/api/v1/posts/${id}/replies`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

export { getComments };
