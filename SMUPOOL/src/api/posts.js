import { postsAxios } from "./axios";

const getPosts = async (page, search) => {
  try {
    const res = await postsAxios({
      params: {
        page: page,
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
    const res = await postsAxios(`${id}`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (postData) => {
  const res = await postsAxios.post(postData);
  console.log(res);

  return res.json();
};

const delectPost = async (id) => {
  const res = await postsAxios.delete(`${id}`);
  console.log(res);

  return res.json();
};

const updataPost = async (id, edit) => {
  const res = await postsAxios.patch(`${id}`, edit);
  console.log(res);
};

export { getPosts, getDetailPost, createPost, delectPost, updataPost };
