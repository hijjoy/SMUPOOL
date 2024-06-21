import * as S from "./MainPage.style";
import ImgHand from "../../assets/images/hand.webp";
import Portal from "../../assets/images/Portal.webp";
import Star from "../../assets/images/Star.png";
import miniStar from "../../assets/images/miniStar.png";
import Button from "../../components/Button";
import Profile from "../../assets/images/mainProfile.png";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import theme from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MainPage = () => {
  const nav = useNavigate();
  const nickname = "24학번 김슴우";

  return (
    <S.Contaienr>
      <motion.div
        initial={{ right: -100, opacity: 0 }}
        animate={{ right: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="profile"
      >
        <S.Profile>
          <img src={Profile} alt="profile" />
          <span>{nickname}님 스뮤풀에 오신 것을 환영합니다!</span>
        </S.Profile>
      </motion.div>
      <S.ImgWrapper>
        <S.Portal src={Portal} alt="portal" />
        <S.Hand src={ImgHand} alt="hand-img" />
        <S.BigPortal src={Portal} alt="portal" />
        <S.Star src={Star} alt="star" />
        <S.MiniStar src={miniStar} alt="star" />
      </S.ImgWrapper>
      <S.TextWrapper>
        <h1>
          상명대 카풀 매칭 서비스
          <br /> 스뮤풀 SMUPOOL
        </h1>
      </S.TextWrapper>
      <S.ButtonWrapper>
        <Button text="문의사항" color={theme.COLOR.MAIN} svg={<RiSendPlaneFill />} onClick={() => nav("/board")} />
        <Button text="실시간 상담" svg={<AiFillMessage color={theme.COLOR.MAIN} />} />
      </S.ButtonWrapper>
    </S.Contaienr>
  );
};

export default MainPage;
