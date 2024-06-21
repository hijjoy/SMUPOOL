const validateUser = (values) => {
  const errors = {
    name: "",
    phoneNum: "",
  };

  if (!/^01[016789]-\d{3,4}-\d{4}$/.test(values.phoneNum)) {
    errors.phoneNum = "핸드폰 번호는 숫자로 입력해주세요. ";
  }

  if (!/^[a-zA-Z가-힣]+$/.test(values.name)) {
    errors.name = "이름은 문자로만 입력해주세요.";
  }

  return errors;
};

export { validateUser };
