import styled from "styled-components";
import theme from "../../../styles/theme";

const Container = styled.div`
  cursor: pointer;
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  width: 100%;
  height: 48px;
  border-bottom: 0.5px solid black;
  background-color: ${(props) => (props.$pin ? "#E0F0FF" : "inherit")};

  &:hover {
    background-color: ${(props) => (props.$pin ? "#cce5fc" : theme.COLOR.GRAY)};
  }
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
  @media ${theme.SCREEN_SIZE.TABLET} {
    font-size: 13px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 57%;

  font-weight: ${(props) => (props.$pin ? "700" : "500")};
  font-size: 15px;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    width: 31px;
  }

  @media ${theme.SCREEN_SIZE.TABLET} {
    font-size: 13px;
  }
`;

const Wrapper = styled.div`
  ${theme.ALIGN.ROW_SPACE_AROUND};
  width: 33%;
  opacity: 0.5;
  font-size: 13px;

  div {
    ${theme.ALIGN.ROW_CENTER};
    width: 35%;

    @media ${theme.SCREEN_SIZE.TABLET} {
      text-align: center;
    }
  }

  span {
    ${theme.ALIGN.ROW_CENTER};
    width: 30%;

    @media ${theme.SCREEN_SIZE.TABLET} {
      width: 40%;
    }
  }

  p {
    ${theme.ALIGN.ROW_CENTER};
    width: 15%;
  }
`;

export { Container, No, Title, Wrapper };
