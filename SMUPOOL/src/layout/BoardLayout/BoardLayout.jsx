import { Outlet } from "react-router-dom";
import * as S from "./BoardLayout.style";
import { Navbar } from "../../components";

const BoardLayout = () => {
  return (
    <S.Container>
      <Navbar />
      <S.Wrapper>
        <Outlet />
      </S.Wrapper>
    </S.Container>
  );
};

export default BoardLayout;
