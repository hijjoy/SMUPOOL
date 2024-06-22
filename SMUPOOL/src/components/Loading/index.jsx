import styled from "styled-components";
import theme from "../../styles/theme";
import { BeatLoader } from "react-spinners";

const LoadingComponent = () => {
  return (
    <Container>
      <BeatLoader />
    </Container>
  );
};

export default LoadingComponent;

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${theme.ALIGN.ROW_CENTER};
`;
