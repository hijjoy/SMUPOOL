import { axiosInstance } from "./axios";

const getComments = async (id) => {
  try {
    const res = await axiosInstance.get(`/api/v1/posts/${id}/replies`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

const postComments = async ({ content, secret, postId, parentId }) => {
  const res = await axiosInstance.post(`/api/v1/replies`, {
    content,
    secret,
    postId,
    parentId,
  });
  console.log(res);
  return res;
};

const DeteleComment = async (id) => {
  try {
    const res = await axiosInstance.delete(`/api/v1/replies/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { getComments, postComments, DeteleComment };
