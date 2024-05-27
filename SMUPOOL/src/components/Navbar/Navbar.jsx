import * as S from "./Navbar.style";
import Profile from "../../assets/images/profile.webp";

const Navbar = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <h1> SMUPOOL</h1>
        <span>문의 게시판</span>
      </S.Wrapper>
      <S.MypageWrppaer>
        <span>마이페이지</span>
        <img src={Profile} />
      </S.MypageWrppaer>
    </S.Container>
  );
};

export default Navbar;
