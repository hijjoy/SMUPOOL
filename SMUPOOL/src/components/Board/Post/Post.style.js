import styled from "styled-components";
import theme from "../../../styles/theme";

const Container = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  width: 100%;
  height: 51px;
  border-bottom: 0.5px solid black;
  background-color: ${(props) => (props.$pin ? "#E0F0FF" : "inherit")};
`;

const No = styled.div`
  width: 10%;
  ${theme.ALIGN.ROW_CENTER};
  padding-right: 15px;
  font-weight: 500;

  img {
    width: 20px;
    height: 20px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 57%;

  font-weight: ${(props) => (props.$pin ? "700" : "500")};

  img {
    width: 31px;
  }
`;

const Wrapper = styled.div`
  ${theme.ALIGN.ROW_SPACE_AROUND};
  width: 33%;
  opacity: 0.5;

  div {
    ${theme.ALIGN.ROW_CENTER};
    width: 30%;
  }

  span {
    ${theme.ALIGN.ROW_CENTER};
    width: 35%;
  }

  p {
    ${theme.ALIGN.ROW_CENTER};
    width: 15%;
  }
`;

export { Container, No, Title, Wrapper };
