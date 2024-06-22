import { commentAxios } from "./axios";

const getComment = async (id) => {
  const res = await commentAxios(`${id}`);
  console.log(res);

  return res.json();
};

const postComment = async (id) => {
  const res = await commentAxios.post(`${id}`);
  console.log(res);
  return res.json();
};

export { getComment, postComment };
