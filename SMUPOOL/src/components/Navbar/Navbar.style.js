import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  width: 100%;
  height: 7%;
  background-color: #cde7ff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Wrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-left: 40px;

  h1 {
    cursor: pointer;
    color: ${theme.COLOR.MAIN};
    font-weight: 700;
    font-size: 20px;
  }

  span {
    margin-left: 30px;
    opacity: 0.5;
    font-weight: 500;
    font-size: 15px;
  }
`;

const MypageWrppaer = styled.div`
  cursor: pointer;
  margin-right: 40px;
  ${theme.ALIGN.ROW_CENTER};

  span {
    font-weight: 500;
    font-size: 15px;
  }

  img {
    margin-bottom: 5px;
    margin-left: 20px;
    width: 25px;
    height: 25px;
  }
`;

export { Container, Wrapper, MypageWrppaer };
