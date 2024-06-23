import * as S from "./MypagePage.style";
import { Navbar } from "../../components";
import Profile from "../../assets/images/profile.webp";
import SubmitButton from "../../components/SubmitButton";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import info from "../../constants/PersonalInfo";
import use from "../../constants/use";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../api/login";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { removeHeader } from "../../utils/header";

const MypagePage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState({
    info: false,
    use: false,
  });

  const { mutate: logoutMutate } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("로그아웃 되셨습니다.", {
        duration: 1200,
        style: {
          position: "absolute",
          bottom: "70px",
          right: "40px",
        },
      });
      // localStorage.clear();
      removeHeader("Authorization");
      localStorage.clear();
      navigate("/");
    },
    onError: (error) => {
      error.response &&
        toast.error(error.response.data.message, {
          style: {
            color: "#fff",
            background: "#e05151",
          },
        });
    },
  });

  const studentId = localStorage.getItem("studentId");
  const name = localStorage.getItem("name");

  const handleLogout = () => {
    logoutMutate({});
  };

  return (
    <S.Container>
      <Navbar />
      <S.Wrapper>
        <S.UserWrapper>
          <S.UserInfo>
            <img src={Profile} />
            <S.InfoText>
              <h4>내정보</h4>
              <p>
                {studentId.substring(2, 4)}학번 {name}님
              </p>
              <p>컴퓨터과학전공 재학</p>
            </S.InfoText>
          </S.UserInfo>
          <S.ButtonWrapper>
            <S.Button onClick={handleLogout}>로그아웃</S.Button>
            <S.Button>회원탈퇴</S.Button>
          </S.ButtonWrapper>
        </S.UserWrapper>
        <S.FormWrapper onSubmit={(e) => e.preventDefault()}>
          <S.FormBox>
            비밀번호 변경
            <input />
            채팅 닉네임 변경
            <input />
          </S.FormBox>
          <hr />
        </S.FormWrapper>
        <S.BottomWrapper>
          <div>
            <span>
              <p>이용약관 </p>
              <S.ArrowButton $open={open.use} onClick={() => setOpen((prev) => ({ info: false, use: !prev.use }))}>
                <SlArrowDown />
              </S.ArrowButton>
            </span>
            <span>
              <p>개인정보처리방침</p>
              <S.ArrowButton $open={open.info} onClick={() => setOpen((prev) => ({ use: false, info: !prev.info }))}>
                <SlArrowDown />
              </S.ArrowButton>
            </span>
          </div>
          <SubmitButton text="저장" />
        </S.BottomWrapper>
        {open.info ? (
          <S.Content>
            <h1>개인정보 처리방침</h1>
            {info.map((e) => (
              <>
                <h3>{e.title}</h3>
                <p>{e.content}</p>
              </>
            ))}
          </S.Content>
        ) : null}

        {open.use ? (
          <S.Content>
            <h1>서비스 이용약관</h1>
            {use.map((e) => (
              <>
                <h3>{e.title}</h3>
                <p>{e.content}</p>
              </>
            ))}
          </S.Content>
        ) : null}
      </S.Wrapper>
    </S.Container>
  );
};

export default MypagePage;
