import styled from "styled-components";
import Logo from "../../assets/images/Logo.webp";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/signup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import signupSchema from "../../schema/signupSchema";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignupPage() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      nickname: "",
    },
  });

  const { email, password, name, nickname } = watch();

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

  const onSubmit = () => {
    mutate({
      name,
      email: email + "@sangmyung.kr",
      password,
      nickname,
    });
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <img src={Logo} alt="Logo" />
      <Contents>
        <Title>
          <h1>회원가입</h1>
          <h2>상명대 학생 인증</h2>
        </Title>
        <Notice>샘물 통합 로그인과 동일합니다.</Notice>
        <Center>
          <Input id="name" {...register("name")} type="text" placeholder="이름" />
          <ErrorMessage>{errors.name && errors.name.message}</ErrorMessage>
          <Input id="nickname" {...register("nickname")} type="text" placeholder="닉네임" />
          <ErrorMessage>{errors.nickname && errors.nickname.message}</ErrorMessage>
          <Input id="email" {...register("email")} type="text" placeholder="학번" />
          <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>
          <Input id="password" {...register("password")} type="password" placeholder="비밀번호" />
          <ErrorMessage>{errors.password && errors.password.message}</ErrorMessage>
        </Center>
        <Center>
          <Btn>인증</Btn>
        </Center>
      </Contents>
    </Container>
  );
}

const Container = styled.form`
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
  padding: 10px;
  font-size: 10px;
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
const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;
