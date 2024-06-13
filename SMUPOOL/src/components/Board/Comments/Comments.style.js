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
  hr {
    margin-bottom: 10px;
    margin-left: 10%;
    background: #9f9f9f;
    border: none;
    height: 1px;
  }
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

const CommentBox = styled.div`
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 120px;

  h5 {
    font-size: 17px;
    font-weight: 500;
    padding-bottom: 10px;
  }

  span {
    font-size: 15px;
  }

  div > p {
    color: #a7a7a7;
    font-size: 13px;
  }
`;

const ChildrenCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  width: 90%;
  height: 110px;
  margin-left: 10%;
  margin-bottom: 10px;
  background-color: #f8f8f8;

  h4 {
    opacity: 0.5;
    font-weight: 400;
    font-size: 15px;
    margin-bottom: 10px;
    svg {
      margin-right: 10px;
    }
  }

  span {
    margin-left: 25px;
    font-size: 15px;
  }

  div > p {
    margin-left: 25px;
    color: #a7a7a7;
    font-size: 13px;
  }
`;

const ChildrenInputWrapper = styled(ChildrenCommentWrapper)`
  padding: 25px 20px;
  div {
    display: flex;

    svg {
      margin-right: 5px;
    }
  }

  span {
    font-weight: 500;
    display: flex;
    align-items: center;
    font-size: 11px;
    margin-top: 5px;
    margin-left: 22px;

    svg {
      width: 17px;
      height: 17px;
      margin-bottom: 3px;
    }

    input {
      margin-bottom: 3px;
      margin-left: 3px;
      accent-color: ${theme.COLOR.MAIN};
    }
  }
`;

export {
  Container,
  InputWrapper,
  TextWrapper,
  CommentWrapper,
  CommentBox,
  ChildrenCommentWrapper,
  CommentsContainer,
  ChildrenInputWrapper,
};
