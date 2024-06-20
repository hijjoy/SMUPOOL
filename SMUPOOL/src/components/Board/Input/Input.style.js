import styled from "styled-components";
import theme from "../../../styles/theme";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    padding: 0 10px;
    font-size: 15px;
    width: ${(props) => (props.$comment ? "87%" : "90%")};
    height: 40px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border: 1px solid #2d415f;

    &:focus {
      outline: 1px solid ${theme.COLOR.MAIN};
    }
  }

  button {
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
    width: 10%;
    height: 40px;
    border: none;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color: ${theme.COLOR.DARK_BLUE};
    color: #fff;
  }
`;

export { Container };
