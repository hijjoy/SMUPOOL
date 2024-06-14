import styled from "styled-components";
import theme from "../../../styles/theme";

const Container = styled.div`
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;

  h4 {
    font-size: 18px;
    margin-right: 10px;
  }

  div {
    ${theme.ALIGN.ROW_CENTER};
    font-size: 13px;

    svg {
      margin-bottom: 3px;
    }

    input {
      margin-bottom: 3px;
      margin-left: 3px;
      accent-color: ${theme.COLOR.MAIN};
    }
  }
`;

const CommentsContainer = styled.div`
  width: 100%;
`;

const CommentWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 25px;

  h1 {
    ${theme.ALIGN.ROW_CENTER};
    padding-top: 40px;
    border-top: 1px solid #000;
    margin-top: 50px;
    font-size: 20px;
    color: ${theme.COLOR.DARK_BLUE};
  }
`;

export { Container, InputWrapper, TextWrapper, CommentWrapper, CommentsContainer };
