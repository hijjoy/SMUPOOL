import * as S from "./Navbar.style";
import Profile from "../../assets/images/profile.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState({
    text: "문의게시판",
    navPath: "/board",
  });

  const { text, navPath } = path;
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (location.pathname === "/board" || location.pathname.startsWith("/my-page")) {
      setPath({ text: "마이페이지", navPath: `/my-page/${userId}` });
    } else {
      setPath({ text: "문의게시판", navPath: "/board" });
    }
  }, [location]);

  return (
    <S.Container>
      <S.Wrapper>
        <h1> SMUPOOL</h1>
        <span onClick={() => nav(navPath)}>{text}</span>
      </S.Wrapper>
      <S.MypageWrppaer onClick={() => nav(`/my-page/${userId}`)}>
        <span>마이페이지</span>
        <img src={Profile} />
      </S.MypageWrppaer>
    </S.Container>
  );
};

export default Navbar;
