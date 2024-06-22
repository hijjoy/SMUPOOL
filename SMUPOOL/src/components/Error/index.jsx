import { MdReportGmailerrorred } from "react-icons/md";
import styled from "styled-components";
import theme from "../../styles/theme";

const ErrorComponent = () => {
  return (
    <Container>
      <div>
        <MdReportGmailerrorred />
        <p>ERROR</p>
      </div>
    </Container>
  );
};

export default ErrorComponent;

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${theme.ALIGN.ROW_CENTER};

  div {
    ${theme.ALIGN.COLUMN_CENTER};

    p {
      font-size: 25px;
      letter-spacing: 0.3rem;
      font-weight: 700;
    }

    svg {
      color: #cc3e39;
      width: 40px;
      height: 40px;
      margin-bottom: 20px;
    }
  }
`;
