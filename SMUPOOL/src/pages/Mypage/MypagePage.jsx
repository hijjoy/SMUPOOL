import * as S from "./MypagePage.style";
import { Navbar } from "../../components";
import Profile from "../../assets/images/profile.webp";
import SubmitButton from "../../components/SubmitButton";
import { SlArrowDown } from "react-icons/sl";

const MypagePage = () => {
  return (
    <S.Container>
      <Navbar text=" 마이페이지" />
      <S.Wrapper>
        <S.UserWrapper>
          <S.UserInfo>
            <img src={Profile} />
            <S.InfoText>
              <h4>내정보</h4>
              <p>24학번 김슴우님</p>
              <p>컴퓨터과학전공 재학</p>
            </S.InfoText>
          </S.UserInfo>
          <S.ButtonWrapper>
            <S.Button>로그아웃</S.Button>
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
              <SlArrowDown />
            </span>
            <span>
              <p>개인정보처리방침</p> <SlArrowDown />
            </span>
          </div>
          <SubmitButton text="저장" />
        </S.BottomWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default MypagePage;
