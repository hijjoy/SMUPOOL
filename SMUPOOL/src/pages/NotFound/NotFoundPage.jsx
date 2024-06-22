import React from "react";
import ErrorComponent from "../../components/Error";
import styled from "styled-components";
import theme from "../../styles/theme";

const NotFoundPage = () => {
  return (
    <Container>
      <ErrorComponent error="Not Found" />
    </Container>
  );
};

export default NotFoundPage;

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
  height: 100vh;
`;
