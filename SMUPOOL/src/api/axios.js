import axios from "axios";

const { VITE_TOKEN } = import.meta.env;

const header = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IjIwMjExMDk3N0BzYW5nbXl1bmcua3IiLCJyb2xlIjpbeyJhdXRob3JpdHkiOiJST0xFX1VTRVIifV0sImlhdCI6MTcxOTA3OTY1MiwiZXhwIjoxNzE5MDgzMjUyfQ.bBrGnB9XCeIhABdqAN4Xmo5MPnp5e-kMAra3MuI_M3o",
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
