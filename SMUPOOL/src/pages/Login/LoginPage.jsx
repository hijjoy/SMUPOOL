import styled from "styled-components";
import Logo from "../../assets/images/Logo.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/login";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { setHeader } from "../../utils/header";
import { axiosInstance } from "../../api/axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success("로그인에 성공하였습니다 !", {
        duration: 1200,
        style: {
          position: "absolute",
          bottom: "70px",
          right: "40px",
        },
      });
      localStorage.setItem("accessToken", data.result.token);
      localStorage.setItem("userId", data.result.userId);
      localStorage.setItem("studentId", studentId);
      localStorage.setItem("name", data.result.userName);
      // axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${data.result.token}`;

      setHeader("Authorization", data.result.token);

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

  const handleLogin = () => {
    mutate({
      email: studentId + "@sangmyung.kr",
      password: password,
    });
  };

  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <Contents>
        <Title>로그인</Title>
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
          <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
          <SignupBtn onClick={() => navigate("/sign-up")}>회원가입</SignupBtn>
        </Center>
      </Contents>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f8fbfd;
`;

const Title = styled.div`
  font-size: 45px;
  font-weight: 700;
  padding: 40px;
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
  height: 45px;
  border-radius: 5px;
  margin: 5px;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 15px;
  background-color: #186dec;
  color: white;
  text-align: center;
  border: 1px solid #186dec;
  font-size: 20px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const SignupBtn = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 15px;
  background-color: white;
  color: #186dec;
  text-align: center;
  border: 1px solid #186dec;
  font-size: 20px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
