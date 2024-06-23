import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  height: 100%;
  width: 100%;
  overflow-x: auto;

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
  /* max-width: 1000px; */
  width: 1000px;
  overflow-x: auto;

  @media ${theme.SCREEN_SIZE.TABLET} {
    width: 700px;
  }
`;
export { Container, Wrapper };
