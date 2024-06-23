import * as yup from "yup";

const signupSchema = yup.object({
  email: yup.string().min(9, "학번은 9자리입니다.").required("학번은 필수 입력값 입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리 입니다.")
    .required("비밀번호는 필수 입력값 입니다."),
  name: yup.string().required("이름은 필수 입력값입니다."),
  nickname: yup.string().required("닉네임은 필수 입력값입니다."),
});

export default signupSchema;
