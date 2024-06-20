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

export { Container, CloseModal, LoginWrapper, FormWrapper, Wrapper };
