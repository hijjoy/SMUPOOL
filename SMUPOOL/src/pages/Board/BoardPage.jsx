import * as S from "./BoardPage.style";
import { Board } from "../../components";

const BoardPage = () => {
  return (
    <S.Container>
      <h1>문의 게시판</h1>
      <S.Wrapper>
        <Board />
      </S.Wrapper>
    </S.Container>
  );
};

export default BoardPage;
