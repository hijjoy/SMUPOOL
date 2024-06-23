import React, { useEffect, useState } from "react";
import * as S from "./ModalChat.style";
import ModalPortal from "../Portal/Portal";
import { IoArrowDownSharp } from "react-icons/io5";
import { FaArrowAltCircleUp } from "react-icons/fa";
import MessageContainer from "../MessageContainer/MessageContainer";
import { useMutation } from "@tanstack/react-query";
import { getChatHistory } from "../../api/chat";
import useStomp from "../../hooks/useStomp";
import { Stomp } from "@stomp/stompjs";
import axios from "axios";

const ModalChat = ({ showModal, onClick, roomId, userId }) => {
  const [message, setMessage] = useState([]);
  const [stompClient, setStompClient] = useState(null);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const socket = new WebSocket("ws://43.202.8.75:8080/chat");
    const stompClient = Stomp.over(socket);

    const sd = stompClient.connect(
      {
        Authorization: `Bearer ${token}`,
      },
      (frame) => {
        console.log("Connected" + frame);
        stompClient.subscribe("/topic/public", (messageOutput) => {
          console.log(messageOutput.body);
          showMessage(JSON.parse(messageOutput.body));
        });
      },
    );
    console.log(sd);
    setStompClient(stompClient);

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    axios
      .get("http://43.202.8.75:8080/chat/history/6", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setMessage(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showMessage = (message) => {
    setMessageList((prevMessages) => [...prevMessages, message]);
  };

  const sendMessage = () => {
    if (stompClient && message.trim() !== "") {
      const chatMessage = JSON.stringify({
        sender: 13,
        content: message,
        chatroom: 6,
      });

      const token = localStorage.getItem("accessToken");
      console.log(chatMessage);
      stompClient.send(
        "/app/chat.message",
        {
          Authorization: `Bearer ${token}`,
        },
        chatMessage,
      );
      setMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <ModalPortal>
      <S.Container $showModal={showModal}>
        <S.CloseModal onClick={onClick}>
          <IoArrowDownSharp />
        </S.CloseModal>

        <S.Wrapper>
          <S.ChatWrapper>
            <MessageContainer messageList={messageList} />

            <S.InputForm onSubmit={handleSubmit}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="실시간 상담 내용을 입력해 주세요. 실시간 상담 시간: 평일 9시~18시"
              />
              <FaArrowAltCircleUp onClick={sendMessage} />
            </S.InputForm>
          </S.ChatWrapper>
        </S.Wrapper>
      </S.Container>
    </ModalPortal>
  );
};

export default ModalChat;
