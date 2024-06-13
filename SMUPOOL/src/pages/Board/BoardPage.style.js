import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  height: 100%;
  width: 100%;

  h1 {
    ${theme.ALIGN.ROW_CENTER};
    padding: 65px 0 25px;

    font-weight: 700;
    font-size: 30px;
    color: ${theme.COLOR.DARK_BLUE};
    height: 18%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 82%;
  width: 70%;
`;
export { Container, Wrapper };
