import React, { useEffect, useState } from "react";
import * as S from "./ModalChat.style";
import ModalPortal from "../Portal/Portal";
import { IoArrowDownSharp } from "react-icons/io5";
import { FaArrowAltCircleUp } from "react-icons/fa";
import Button from "../Button";
import theme from "../../styles/theme";
import useForm from "../../hooks/useForm";
import { validateUser } from "../../utils/validate";
import socket from "../../api/server";
import MessageContainer from "../MessageContainer/MessageContainer";

const ModalChat = ({ showModal, onClick }) => {
  const [person, setPerson] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const user = useForm({
    initialValue: {
      name: "",
      phoneNum: "",
    },
    validate: validateUser,
  });

  const isFormValid = !user.errors.name && !user.errors.phoneNum;

  console.log(user.values.name);

  const onSubmit = (e) => {
    e.preventDefault();

    socket.emit("login", [user.values.name, user.values.phoneNum], (res) => {
      console.log(res);
      if (res?.ok) {
        setPerson(res.data);
        setShowChat(true);
      }
    });
    setShowChat(true);
  };

  // useEffect(() => {
  //   socket.on("message", (message) => {
  //     setMessageList((prev) => prev.concat(message));
  //   });
  // }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", message, (res) => {
      console.log("sendMessage response", res);
      setMessage("");
    });
  };

  return (
    <ModalPortal>
      <S.Container $showModal={showModal}>
        <S.CloseModal onClick={onClick}>
          <IoArrowDownSharp />
        </S.CloseModal>
        {showChat ? (
          <S.Wrapper>
            <S.ChatWrapper>
              <MessageContainer messageList={messageList} user={person} />

              <S.InputForm onSubmit={sendMessage}>
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
        ) : (
          <S.LoginWrapper>
            <span>
              슴우풀 실시간 상담소입니다. <br />
              실시간 상담 시간은 평일 9시부터 18시까지입니다.
            </span>
            <S.FormWrapper onSubmit={onSubmit}>
              <label htmlFor="name">성함을 입력해 주세요.</label>
              <input id="name" name="name" {...user.getTextInputProps("name")} />
              {user.errors.name && user.touched.name && <p>{user.errors.name}</p>}
              <label htmlFor="phoneNum">전화번호를 입력해 주세요.</label>
              <input id="phoneNum" name="phoneNum" {...user.getPhoneNumInputProps("phoneNum")} maxLength={13} />
              {user.errors.phoneNum && user.touched.phoneNum && <p>{user.errors.phoneNum}</p>}
              <Button
                bgcolor={isFormValid ? theme.COLOR.MAIN : "#D9D9D9"}
                color="#fff"
                text="상담 시작하기"
                disable={!isFormValid}
                width="400px"
                onClick={onSubmit}
              />
            </S.FormWrapper>
          </S.LoginWrapper>
        )}
      </S.Container>
    </ModalPortal>
  );
};

export default ModalChat;
