import styled from "styled-components";
import theme from "../../../../styles/theme";

const Container = styled.div`
  width: 100%;

  hr {
    margin-bottom: 10px;
    background: #9f9f9f;
    margin-left: 10%;
    border: none;
    height: 1px;
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

export { CommentBox, ChildrenInputWrapper, ChildrenCommentWrapper, Container };
