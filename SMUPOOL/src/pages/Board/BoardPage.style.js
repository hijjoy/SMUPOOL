import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  height: 100%;

  h1 {
    ${theme.ALIGN.ROW_CENTER};
    padding-top: 50px;
    font-weight: 700;
    font-size: 30px;
    ${theme.COLOR.DARK_BLUE};
    height: 18%;
  }
`;

const Wrapper = styled.div`
  height: 82%;
`;
export { Container, Wrapper };
