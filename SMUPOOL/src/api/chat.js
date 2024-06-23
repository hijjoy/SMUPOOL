import { axiosInstance } from "./axios";

const createChatRoom = async ({ roomName, userCount, password }) => {
  const { data } = await axiosInstance.post(`/chatrooms`, {
    roomName,
    userCount,
    password,
  });
  return data;
};

const getChatRooms = async () => {
  const { data } = await axiosInstance.get(`/chatrooms`);
  return data;
};

const enterChatRoom = async ({ roomId, userId }) => {
  const { data } = await axiosInstance.post(`/chatroom/join`, {
    roomId,
    userId,
  });
  return data;
};

const getChattingList = async ({ roomId }) => {
  const { data } = await axiosInstance.get(`/chattinglist/${roomId}`);
  return data;
};

const getChatroomUsers = async ({ roomId }) => {
  const { data } = await axiosInstance.get(`/chatroom/users/${roomId}`);
  return data;
};

const getChatHistory = async ({ roomId }) => {
  const { data } = await axiosInstance.get(`/chat/history/${roomId}`);
  return data;
};

export { createChatRoom, getChatRooms, enterChatRoom, getChattingList, getChatroomUsers, getChatHistory };
