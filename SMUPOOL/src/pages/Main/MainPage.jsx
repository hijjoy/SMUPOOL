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
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalChat from "../../components/ModalChat";
import { motion } from "framer-motion";
import { toast } from "sonner";

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);

  const nav = useNavigate();
  const studentId = localStorage.getItem("studentId");
  const name = localStorage.getItem("name");
  const token = localStorage.getItem("accessToken");

  const handleIntoBoard = () => {
    if (studentId) {
      nav("/board");
    } else {
      toast.error("로그인을 먼저 해주세요!", {
        style: {
          color: "#fff",
          background: "#e05151",
        },
      });
      nav("/login");
    }
  };

  return (
    <S.Contaienr>
      <motion.div
        initial={{ right: -100, opacity: 0 }}
        animate={{ right: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="profile"
      >
        <S.Profile>
          {token ? (
            <>
              <img src={Profile} alt="profile" />
              <span>
                {studentId} {name}님 스뮤풀에 오신 것을 환영합니다!
              </span>
            </>
          ) : (
            <Link to="/login">로그인</Link>
          )}
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
      <S.ButtonWrapper $showModal={showModal}>
        <Button
          text="문의사항"
          bgcolor={theme.COLOR.MAIN}
          color="#fff"
          svg={<RiSendPlaneFill />}
          onClick={handleIntoBoard}
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
