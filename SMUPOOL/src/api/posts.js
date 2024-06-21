import { postsAxios } from "./axios";

const getPosts = async () => {
  const { data } = await postsAxios("/get");

  return data;
};

export { getPosts };
