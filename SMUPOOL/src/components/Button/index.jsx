import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const Button = ({ text, onClick, svg, bgcolor, color, disable, width }) => {
  return (
    <Container onClick={onClick} $color={color} $bgcolor={bgcolor} disabled={disable} $width={width}>
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

  width: ${(props) => props.$width};
  height: 45px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.$bgcolor};
  color: ${(props) => props.$color};
  margin-right: 20px;
  font-weight: 500;

  cursor: pointer;

  svg {
    margin-right: 7px;
  }

  &:hover {
    transform: ${(props) => (props.disabled ? "" : "scale(0.98)")};
  }
`;
