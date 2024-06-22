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
import { useState } from "react";
import ModalChat from "../../components/ModalChat";

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);

  const nav = useNavigate();
  const nickname = "24학번 김슴우";

  return (
    <S.Contaienr>
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
      <S.ButtonWrapper $showModal={showModal}>
        <Button
          text="문의사항"
          bgcolor={theme.COLOR.MAIN}
          color="#fff"
          svg={<RiSendPlaneFill />}
          onClick={() => nav("/board")}
          width="185px"
        />
        <Button
          text="실시간 상담"
          svg={<AiFillMessage color={theme.COLOR.MAIN} />}
          onClick={() => setShowModal(true)}
          width="185px"
        />
      </S.ButtonWrapper>

      <ModalChat
        showModal={showModal}
        onClick={() => {
          setShowModal((prev) => !prev);
          location.reload();
        }}
      />
    </S.Contaienr>
  );
};

export default MainPage;
