import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  width: 1000px;

  @media ${theme.SCREEN_SIZE.TABLET} {
    width: 700px;
  }
`;

const Attributes = styled.div`
  width: 100%;
  height: 48px;
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  font-size: 15px;
  font-weight: 700;

  border-top: 1px solid black;
  border-bottom: 0.5px solid black;

  @media ${theme.SCREEN_SIZE.TABLET} {
    font-size: 12px;
  }
`;

const Number = styled.div`
  width: 33%;
  padding-left: 30px;
`;

const Wrapper = styled.div`
  ${theme.ALIGN.ROW_SPACE_AROUND};
  width: 33%;

  div {
    ${theme.ALIGN.ROW_CENTER};
    width: 35%;
    padding-left: 5px;
  }

  span {
    ${theme.ALIGN.ROW_CENTER};
    width: 30%;
    padding-left: 14px;
  }

  p {
    ${theme.ALIGN.ROW_CENTER};
    width: 25%;
    padding-left: 15px;
  }
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: calc(48px * 9);
`;

const FootWrapper = styled.div`
  margin-top: 30px;
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  width: 100%;
`;

const Search = styled.div`
  padding: 0 10px;
  ${theme.ALIGN.ROW_SPACE_BETWEEN};

  border: 1px solid ${theme.COLOR.DARK_BLUE};
  border-radius: 5px;
  width: 24%;
  height: 35px;
  margin-left: 10px;

  input {
    border: none;
    width: 90%;
    outline: none;

    &::placeholder {
      opacity: 0.5;
    }
  }
`;

const Button = styled.button`
  cursor: pointer;
  background-color: ${theme.COLOR.MAIN};
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  width: 100px;
  height: 35px;
  ${theme.ALIGN.ROW_CENTER};
  margin-left: 16%;

  svg {
    margin-left: 7px;
  }

  &:hover {
    background-color: #1665db;
  }
`;

const PageButton = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  width: 60px;
  svg {
    width: 20px;
    height: 20px;
    margin-bottom: 2px;

    &:hover {
      transform: scale(0.95);
      color: ${theme.COLOR.MAIN};
    }
  }

  button {
    ${theme.ALIGN.ROW_CENTER};
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:disabled :hover {
      transform: scale(1);
      cursor: not-allowed;
      color: inherit;
    }
  }
`;
export { Container, Attributes, Wrapper, Number, PostWrapper, FootWrapper, Search, Button, PageButton };
