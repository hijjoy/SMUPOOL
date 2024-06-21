import { io } from "socket.io-client";

const socket = io("https://localhost:5001");
export default socket;
