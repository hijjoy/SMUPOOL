import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
  overflow-x: scroll;
  height: 85%;
`;

const WelcomeMsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    padding: 4px 15px;
    font-size: 12px;
    border-radius: 20px;
    background-color: #55667758;
    color: #fff;
  }
`;

const MyMsg = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
  margin-right: 25px;

  div {
    background-color: #abd7ff;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 8px;
    max-width: 200px;
    font-size: 12px;
  }
`;

const yourMsg = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5px;
  margin-left: 25px;
  align-items: center;

  div {
    background-color: #fff;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 8px;
    max-width: 200px;
    font-size: 12px;
  }

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

export { Container, WelcomeMsg, MyMsg, yourMsg };
