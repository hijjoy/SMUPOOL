import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const SubmitButton = ({ text }) => {
  return <Button>{text}</Button>;
};

export default SubmitButton;

const Button = styled.button`
  cursor: pointer;
  background-color: ${theme.COLOR.MAIN};
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: 500;
  width: 100px;
  height: 35px;
  ${theme.ALIGN.ROW_CENTER};

  &:hover {
    background-color: #1665db;
  }
`;
