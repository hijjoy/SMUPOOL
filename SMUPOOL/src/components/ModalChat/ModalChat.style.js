import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  display: ${(props) => (props.$showModal ? "" : "none")};

  position: fixed;
  top: 110px;
  left: 100px;

  background-color: #fff;
  border-radius: 40px;

  width: 750px;
  height: 600px;

  z-index: 9999;
`;

const CloseModal = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;

  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    transform: rotate(315deg);
  }
`;

const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${theme.ALIGN.COLUMN_CENTER};

  span {
    font-size: 15px;
    color: #b0b1b3;
    text-align: center;
    font-weight: 500;
    padding-bottom: 55px;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 18px;
    color: ${theme.COLOR.DARK_BLUE};
    padding-bottom: 10px;
    margin-top: 20px;
  }

  input {
    width: 400px;
    height: 40px;
    border: 1px solid #b0b1b3;
    border-radius: 6px;
    color: ${theme.COLOR.DARK_BLUE};
    font-size: 15px;
    padding: 5px 10px;
  }

  button {
    font-size: 15px;
    margin-top: 30px;
    height: 60px;
  }

  p {
    color: red;
    font-size: 10px;
    padding-top: 5px;
    padding-left: 1px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${theme.ALIGN.COLUMN_CENTER};
`;

const ChatWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  width: 600px;
  height: 460px;
  background-color: #f7f7f7;
  box-shadow: 4px 4px 30px 0px rgba(0, 0, 0, 0.1);
`;

const InputForm = styled.form`
  border-radius: 5px;
  background-color: #fff;
  width: 100%;
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  position: absolute;
  bottom: 0;
  left: 0;

  input {
    padding: 0 10px;
    border-radius: 5px;
    width: 90%;
    height: 50px;
    border: none;
    font-size: 15px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      position: relative;
      font-size: 12px;
      color: #9c9c9c;
    }
  }

  svg {
    margin-right: 15px;
    width: 30px;
    height: 30px;
    color: #186dec;
    cursor: pointer;

    &:hover {
      transform: scale(0.97);
    }
  }
`;

export { Container, CloseModal, LoginWrapper, FormWrapper, Wrapper, ChatWrapper, InputForm };
