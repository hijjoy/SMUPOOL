import { styled } from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  height: 100%;
  width: 100vw;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  height: 93%;
`;

export { Container, Wrapper };
