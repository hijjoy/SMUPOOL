import styled from "styled-components";

import Logo from "../../assets/images/Logo.webp";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={Logo} alt="asdf" />

      <Contents>
        <Title>로그인</Title>
        <Center>
          <Input type="text" placeholder="학번" />
          <Input type="password" placeholder="비밀번호" />
        </Center>
        <Error> awef</Error>
        <Center>
          <Btn>로그인</Btn>
          <Btn
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            회원가입
          </Btn>
        </Center>
      </Contents>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 45px;
  font-weight: 700;
`;
const Error = styled.div`
  width: 60%;
  margin: 15px;
  text-align: center;
  height: 70px;
  color: #fa1919;
  background-color: #e8eaec;
`;
const Contents = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
const Input = styled.input`
  border: 1px solid #b0b1b3;
  width: 80%;
  height: 60px;
  border-radius: 10px;
  margin: 15px;
`;
const Btn = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 23px;
  background-color: #186dec;
  color: white;
  text-align: center;
  border: 1px solid #186dec;
  font-size: 30px;
  margin-bottom: 5px;
`;
const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
