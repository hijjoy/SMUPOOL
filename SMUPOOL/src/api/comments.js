import { commentAxios, postsAxios } from "./axios";

const getComments = async (id) => {
  try {
    const res = await postsAxios(`${id}/replies`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

const postComment = async (id) => {
  const res = await commentAxios.post(`${id}`);
  console.log(res);
  return res.json();
};

export { getComments, postComment };
