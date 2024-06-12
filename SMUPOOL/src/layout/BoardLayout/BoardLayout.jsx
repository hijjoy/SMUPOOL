import { Outlet } from "react-router-dom";
import * as S from "./BoardLayout.style";
import { Navbar } from "../../components";

const BoardLayout = () => {
  return (
    <S.Container>
      <Navbar text="문의 게시판" />
      <S.Wrapper>
        <Outlet />
      </S.Wrapper>
    </S.Container>
  );
};

export default BoardLayout;
