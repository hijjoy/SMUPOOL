import * as S from "./Input.style";

const Input = ({ comment }) => {
  return (
    <S.Container $comment={comment}>
      <input type="text" />
      <button>등록</button>
    </S.Container>
  );
};

export default Input;
