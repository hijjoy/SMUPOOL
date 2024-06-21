import axios from "axios";

const header = {
  "Content-Type": "application/json",
};

const postsAxios = axios.create({
  baseURL: "http://localhost:3000/api/posts",
  headers: header,
});

const commentAxios = axios.create({
  baseURL: "http://localhost:3000/api/comment",
  headers: header,
});

export { postsAxios, commentAxios };
