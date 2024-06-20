import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  padding-top: 110px;
  width: 100%;
`;

const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
  margin-bottom: 50px;
`;

const UserInfo = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  img {
    width: 120px;
    height: 120px;
  }
`;

const InfoText = styled.div`
  margin-left: 30px;
  h4 {
    font-size: 24px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  p {
    font-size: 15px;
    padding-top: 13px;
  }
`;

const ButtonWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  padding-right: 50px;
`;

const Button = styled.button`
  color: ${theme.COLOR.DARK_BLUE};
  font-size: 15px;
  font-weight: 500;
  border: 1px solid ${theme.COLOR.DARK_BLUE};
  background-color: inherit;
  border-radius: 5px;
  padding: 10px 10px;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: ${theme.COLOR.DARK_BLUE};
  }
`;

const FormWrapper = styled.div`
  width: 65%;

  hr {
    margin-top: 50px;
    background: #e8eaec;
    height: 2px;
    border: 0;
  }
`;

const FormBox = styled.div`
  font-size: 15px;
  padding-left: 150px;
  color: ${theme.COLOR.DARK_BLUE};
  width: 380px;
  display: flex;
  flex-direction: column;

  input {
    margin: 5px 0 20px;
    border: 1px solid ${theme.COLOR.DARK_BLUE};
    border-radius: 5px;
    padding: 6px 10px;

    &:focus {
      outline: 1px solid ${theme.COLOR.DARK_BLUE};
    }
  }
`;

const BottomWrapper = styled.div`
  padding-top: 70px;
  width: 65%;
  ${theme.ALIGN.ROW_SPACE_BETWEEN};

  div {
    display: flex;
    padding-left: 20px;
  }

  span {
    cursor: pointer;
    display: flex;
    color: #8a9099;
    font-size: 13px;
    margin: 0 20px;

    p {
      margin-right: 5px;
    }
  }
`;

export {
  Container,
  Wrapper,
  UserWrapper,
  UserInfo,
  InfoText,
  ButtonWrapper,
  Button,
  FormWrapper,
  FormBox,
  BottomWrapper,
};
