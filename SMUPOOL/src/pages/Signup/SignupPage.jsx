import styled from "styled-components";
import Logo from "../../assets/images/Logo.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/signup";
import { useMutation } from "@tanstack/react-query";

export default function SignupPage() {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log(data);
      alert("회원가입이 완료되었습니다.");
      navigate("/");
    },
    onError: (error) => {
      console.error(error.response);
    },
  });

  const handleSignup = () => {
    mutate({
      name: studentId,
      email: studentId + "@sangmyung.kr",
      password,
      nickname: studentId,
    });
  };

  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <Contents>
        <Title>
          <h1>회원가입</h1>
          <h2>상명대 학생 인증</h2>
        </Title>
        <Notice>샘물 통합 로그인과 동일합니다.</Notice>
        <Center>
          <Input type="text" placeholder="학번" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Center>
        <Center>
          <Btn onClick={handleSignup}>인증</Btn>
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
  background-color: #f8fbfd;
`;

const Title = styled.div`
  h1 {
    font-size: 45px;
    font-weight: 700;
    padding: 40px;
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

const Notice = styled.div`
  width: 60%;
  margin: 15px;
  text-align: center;
  padding: 10px; /* 내부 패딩 추가 */
  font-size: 10px; /* 글자 크기 조정 */
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
  height: 45px;
  border-radius: 5px;
  margin: 5px;
`;

const Btn = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 15px;
  background-color: #186dec;
  color: white;
  text-align: center;
  border: 1px solid #186dec;
  font-size: 20px;
  margin-bottom: 5px;
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Message = styled.div`
  width: 60%;
  margin: 15px;
  text-align: center;
  padding: 10px; /* 내부 패딩 추가 */
  font-size: 10px; /* 글자 크기 조정 */
  color: ${(props) => (props.type === "success" ? "#186dec" : "#fa1919")};
  background-color: #e8eaec;
  white-space: pre-wrap;
`;
