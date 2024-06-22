import styled from "styled-components";
import Logo from "../../assets/images/Logo.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/signup"; // signup 함수를 import

export default function SignupPage() {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 성공 또는 실패 메시지 유형을 저장

  const handleSignup = async () => {
    try {
      const data = await signup(studentId, password);
      console.log("회원가입 성공:", data);
      // 성공 메시지 설정
      setMessage("인증 완료! 가입되었습니다.");
      setMessageType("success");
      // 3초 후에 로그인 페이지로 이동
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.log("회원가입 실패:", error);
      // 실패 메시지 설정
      setMessage("인증되지 않았습니다.\n샘물 ID/PW를 확인하세요.");
      setMessageType("error");
    }
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
        {message && <Message type={messageType}>{message}</Message>}
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
