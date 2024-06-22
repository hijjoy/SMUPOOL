import { MdReportGmailerrorred } from "react-icons/md";
import styled from "styled-components";
import theme from "../../styles/theme";

const ErrorComponent = ({ error }) => {
  return (
    <Container>
      <div>
        <MdReportGmailerrorred />
        <span>ERROR</span>
        <p>{error}</p>
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

    span {
      font-size: 25px;
      letter-spacing: 0.3rem;
      font-weight: 700;
      margin-bottom: 10px;
    }

    svg {
      color: #cc3e39;
      width: 40px;
      height: 40px;
      margin-bottom: 20px;
    }

    p {
      letter-spacing: 0.1rem;
    }
  }
`;
