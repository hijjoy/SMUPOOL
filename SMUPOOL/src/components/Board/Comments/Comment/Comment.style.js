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
  height: 100%;

  h5 {
    font-size: 17px;
    font-weight: 500;
    padding-bottom: 13px;
    color: ${theme.COLOR.DARK_BLUE};
  }

  div {
    font-size: 13px;
    width: 100%;
  }
`;

const ChildrenCommentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 17px;
  width: 90%;
  height: 100%;
  margin-left: 10%;
  margin-bottom: 10px;
  background-color: #f8f8f8;

  h4 {
    opacity: 0.5;
    font-weight: 400;
    font-size: 15px;
    margin-bottom: 14px;
    svg {
      margin-right: 10px;
    }
  }

  span {
    margin-left: 25px;
    font-size: 13px;
    padding-bottom: 25px;
    padding-right: 20px;
  }

  p {
    position: absolute;
    right: 20px;
    bottom: 15px;
    color: #a7a7a7;
    font-size: 12px;
  }
`;

const ChildrenInputWrapper = styled(ChildrenCommentWrapper)`
  display: ${(props) => (props.$open ? "block" : "none")};
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

const CommentBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 23px;

  button {
    cursor: pointer;
    border: none;
    background-color: inherit;
    color: #a7a7a7;
    text-decoration: underline;
    font-size: 13px;

    &:hover {
      color: #8c8c8c;
    }
  }

  p {
    color: #a7a7a7;
    font-size: 12px;
  }
`;

const CComent = styled.div`
  display: ${(props) => (props.$open ? "block" : "none")};
`;

export { CommentBox, ChildrenInputWrapper, ChildrenCommentWrapper, Container, CommentBtn, CComent };
