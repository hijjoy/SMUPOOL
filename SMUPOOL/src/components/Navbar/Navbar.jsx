import * as S from "./Navbar.style";
import Profile from "../../assets/images/profile.webp";
import { useNavigate } from "react-router-dom";

const Navbar = ({ text }) => {
  const nav = useNavigate();

  return (
    <S.Container>
      <S.Wrapper>
        <h1 onClick={() => nav("/")}> SMUPOOL</h1>
        <span>{text}</span>
      </S.Wrapper>
      <S.MypageWrppaer onClick={() => nav("/my-page/id나중에변경")}>
        <span>마이페이지</span>
        <img src={Profile} />
      </S.MypageWrppaer>
    </S.Container>
  );
};

export default Navbar;
