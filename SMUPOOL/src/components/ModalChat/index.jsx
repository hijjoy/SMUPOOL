import React, { useState } from "react";
import * as S from "./ModalChat.style";
import ModalPortal from "../Portal/Portal";
import { IoArrowDownSharp } from "react-icons/io5";
import Button from "../Button";
import theme from "../../styles/theme";
import useForm from "../../hooks/useForm";
import { validateUser } from "../../utils/validate";

const ModalChat = ({ showModal, onClick }) => {
  const [showChat, setShowChat] = useState(false);
  const user = useForm({
    initialValue: {
      name: "",
      phoneNum: "",
    },
    validate: validateUser,
  });

  const isFormValid = !user.errors.name && !user.errors.phoneNum;

  const onSubmit = (e) => {
    e.preventDefault();
    setShowChat(true);
  };

  return (
    <ModalPortal>
      <S.Container $showModal={showModal}>
        <S.CloseModal onClick={onClick}>
          <IoArrowDownSharp />
        </S.CloseModal>
        {showChat ? (
          <S.Wrapper>dd</S.Wrapper>
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
