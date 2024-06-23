import { io } from "socket.io-client";

const socket = (namespace) => {
  return io(`http://43.202.8.75:8080/${namespace}`, {
    withCredentials: true,
  });
};

export default socket;
