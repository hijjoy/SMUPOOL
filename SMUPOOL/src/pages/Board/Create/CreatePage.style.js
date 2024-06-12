import styled from "styled-components";
import theme from "../../../styles/theme";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 130px;

  height: 100%;
  width: 60%;
`;

const TitleInput = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  width: 100%;
  font-size: 30px;
  padding: 10px;
  outline: none;
  margin-bottom: 20px;

  &::placeholder {
    opacity: 0.5;
  }
`;

const ContentInput = styled.textarea`
  width: 100%;
  font-size: 30px;
  height: 200px;
  border: 1px solid #999;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  resize: none;
  font-size: 17px;
  padding: 15px 20px;
  margin-bottom: 30px;

  &::placeholder {
    opacity: 0.5;
  }

  &:focus {
    outline: 1px solid ${theme.COLOR.MAIN};
  }
`;

const Wrapper = styled.div`
  width: 100%;
  font-size: 30px;
  height: 170px;
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
`;

const FileWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FileInput = styled.input`
  display: none;
`;

const FileBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  label {
    font-size: 13px;
    font-weight: 700;
    border-radius: 5px;
    padding: 9px 23px;
    background-color: ${theme.COLOR.DARK_BLUE};
    color: #fff;
    cursor: pointer;
  }

  p {
    font-size: 12px;
    margin-left: 10px;
  }
`;

const ImgBox = styled.div`
  img {
    margin-right: 10px;
    width: 120px;
    height: 120px;
  }
`;

const Lockbox = styled.div`
  svg {
    width: 17px;
    height: 17px;
    margin-bottom: 4px;
    margin-right: 3px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: baseline;
    font-size: 15px;
    padding-bottom: 5px;

    input {
      margin-left: 5px;
      margin-bottom: 3px;
      width: 17px;
      height: 17px;
      accent-color: ${theme.COLOR.MAIN};
    }
  }
`;

const PwdInput = styled.input`
  border: 1px solid ${theme.COLOR.DARK_BLUE};
  border-radius: 5px;
  padding: 5px 10px;
  width: 200px;
  font-size: 12px;

  &::placeholder {
    opacity: 0.5;
  }

  &:focus {
    border: 1px solid #999;
    outline: 1px solid ${theme.COLOR.MAIN};
  }
`;

const SubmitWrapper = styled.div`
  height: 100%;
  width: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: end;
  button {
    cursor: pointer;
    background-color: ${theme.COLOR.MAIN};
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: 500;
    width: 100px;
    height: 35px;
    ${theme.ALIGN.ROW_CENTER};
  }
`;

export {
  Container,
  TitleInput,
  ContentInput,
  Wrapper,
  FileWrapper,
  FileInput,
  FileBox,
  ImgBox,
  SubmitWrapper,
  Lockbox,
  PwdInput,
  BtnBox,
};
