import * as S from "./Input.style";

const Input = ({ comment, value, onChange, onSubmit }) => {
  return (
    <S.Container $comment={comment}>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={onSubmit}>등록</button>
    </S.Container>
  );
};

export default Input;
