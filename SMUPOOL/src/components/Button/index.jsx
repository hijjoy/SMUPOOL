import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const Button = ({ text, onClick, svg, color }) => {
  return (
    <Container onClick={onClick} $color={color}>
      {svg}
      <div> {text}</div>
    </Container>
  );
};

export default Button;

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 185px;
  height: 45px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.$color};
  color: ${(props) => (props.$color === theme.COLOR.MAIN ? "#fff" : "")};
  margin-right: 20px;
  font-weight: 500;

  cursor: pointer;

  svg {
    margin-right: 7px;
  }

  &:hover {
    transform: scale(0.98);
  }
`;
