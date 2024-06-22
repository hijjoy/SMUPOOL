import axios from "axios";

const { VITE_TOKEN } = import.meta.env;

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${VITE_TOKEN}`,
};

const postsAxios = axios.create({
  baseURL: "http://43.202.8.75:8080/api/v1/posts",
  headers: header,
  params: {
    offset: 8,
  },
});

const commentAxios = axios.create({
  baseURL: "http://43.202.8.75:8080/api/v1/reply",
  headers: header,
});

export { postsAxios, commentAxios };
