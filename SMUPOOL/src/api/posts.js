import { axiosInstance } from "./axios";

const getPosts = async (page, search) => {
  try {
    const res = await axiosInstance.get("/api/v1/posts", {
      params: {
        page: page,
        offset: 8,
        search: search,
      },
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

const getDetailPost = async (id) => {
  try {
    const res = await axiosInstance.get(`/api/v1/posts/${id}`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (postData) => {
  try {
    const res = await axiosInstance.post("/api/v1/posts", postData);
    console.log(res);
    return res.data.result;
  } catch (error) {
    console.log(res);
  }
};

const delectPost = async (id) => {
  try {
    const res = await axiosInstance.delete(`/api/v1/posts/${id}`);
    return res;
  } catch (error) {
    console.log(res);
  }
};

const updatePost = async ({ id, editData }) => {
  console.log(id, editData);
  try {
    console.log(id, editData);
    const res = await axiosInstance.patch(`/api/v1/posts/${id}`, editData);
    return res;
    return id;
  } catch (error) {
    // console.log(error);
  }
};

export { getPosts, getDetailPost, createPost, delectPost, updatePost };
