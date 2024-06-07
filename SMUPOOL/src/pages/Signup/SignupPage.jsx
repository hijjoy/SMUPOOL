import styled from "styled-components";

import Logo from "../../assets/images/Logo.webp";
export default function SignupPage() {
  return (
    <Container>
      <img src={Logo} alt="asdf" />

      <Contents>
        <Title>
          <h1>회원가입</h1>
          <h2>상명대 학생 인증</h2>
        </Title>
        <Center>
          <Input type="text" placeholder="학번" />
          <Input type="password" placeholder="비밀번호" />
        </Center>
        <Center>
          <Btn>인증</Btn>
        </Center>
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  h1 {
    font-size: 45px;
    font-weight: 700;
  }
  h2 {
    font-size: 30px;
    font-weight: 700;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
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
