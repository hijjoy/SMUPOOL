import { postsAxios } from "./axios";

const getPosts = async () => {
  const res = await postsAxios();
  console.log(res);

  return res.json();
};

const getDetailPost = async (id) => {
  const res = await postsAxios(`${id}`);
  console.log(res);

  return res.json();
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
