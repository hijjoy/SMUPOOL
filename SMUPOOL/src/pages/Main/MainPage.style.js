import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";

const changeOpacity = keyframes`
  from {
    opacity: 0.8;
  }
  to {
    opacity: 0;
  }
`;

const Contaienr = styled.div`
  background: linear-gradient(
    53deg,
    rgba(24, 109, 236, 0.2) -9.44%,
    rgba(24, 109, 236, 0.39) 6.48%,
    rgba(24, 109, 236, 0.76) 56.59%,
    rgba(24, 109, 236, 0.83) 66.02%,
    rgba(24, 109, 236, 0.9) 74.27%,
    rgba(24, 109, 236, 0.87) 98.27%
  );

  width: 100%;
  height: 100vh;

  display: flex;

  .profile {
    width: 100%;
    position: absolute;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 49%;
  height: 100%;
`;

const TextWrapper = styled.div`
  position: relative;
  width: 51%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 260px;
    color: #fff;
    font-size: 53px;
    word-break: keep-all;
    text-align: center;
    font-weight: 900;
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    margin-right: 190px;
    line-height: 66px;
    letter-spacing: 1.5px;

    @media screen and (max-width: 1140px) {
      display: none;
    }
  }
`;

const Hand = styled.img`
  position: absolute;
  bottom: 0;
  left: 50px;
  width: 670px;
  z-index: 2;
`;

const Portal = styled.img`
  position: absolute;
  top: 240px;
  left: 170px;
  width: 70px;
  animation: ${changeOpacity} 1.5s 0s infinite linear alternate;
`;

const BigPortal = styled.img`
  position: absolute;
  top: 100px;
  right: 10px;
  width: 100px;
  animation: ${changeOpacity} 1.3s 0s infinite linear alternate;
  transform: rotate(135deg);

  @media ${theme.SCREEN_SIZE.TABLET} {
    display: none;
  }
`;

const MiniStar = styled.img`
  animation: ${changeOpacity} 1s 0s infinite linear alternate;
  position: absolute;
  bottom: 300px;
  right: 60px;
  width: 60px;

  @media ${theme.SCREEN_SIZE.TABLET} {
    display: none;
  }
`;
const Star = styled(MiniStar)`
  animation: ${changeOpacity} 1.2s 0s infinite linear alternate;

  bottom: 365px;
  right: 35px;
  width: 40px;
`;

const ButtonWrapper = styled.div`
  display: ${(props) => (props.$showModal ? "none" : "flex")};
  z-index: 5;
  position: absolute;
  right: 50px;
  bottom: 40px;
`;

const Profile = styled.div`
  position: absolute;
  right: 30px;
  top: 20px;
  ${theme.ALIGN.ROW_CENTER};
  display: ${(props) => (props.$showModal ? "none" : "")};

  img {
    cursor: pointer;
    width: 35px;
    margin-right: 10px;
    padding-top: 3px;
    z-index: 9999;

    &:hover {
      transform: scale(0.98);
    }
  }

  span {
    cursor: pointer;
    z-index: 9999;
    ${theme.ALIGN.ROW_CENTER};
    padding: 15px;
    height: 30px;
    background-color: rgba(232, 234, 236, 0.57);
    border-radius: 20px;
    color: ${theme.COLOR.DARK_BLUE};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-weight: 500;
    font-size: 13px;
    &:hover {
      transform: scale(0.98);
    }
  }

  a {
    font-size: 13px;
    ${theme.ALIGN.ROW_CENTER};
    height: 30px;
    padding: 15px;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: rgba(232, 234, 236, 0.57);
    z-index: 999;
    text-decoration: none;
    color: ${theme.COLOR.DARK_BLUE};
    cursor: pointer;

    &:hover {
      transform: scale(0.98);
    }
  }
`;

export { Contaienr, ImgWrapper, TextWrapper, Hand, Portal, BigPortal, MiniStar, Star, ButtonWrapper, Profile };
