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

const MyMsgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10px;
`;

const MyMsg = styled.div`
  background-color: skyblue;
  padding: 12px;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  border-bottom-left-radius: 22px;
  color: black;
  margin: 10px 0;
`;

const YourMsgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-right: 10px;
`;

const yourMsg = styled.div`
  background-color: gray;
  padding: 12px;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  border-bottom-right-radius: 22px;
  color: lightgray;

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

export { Container, MyMsgContainer, YourMsgContainer, WelcomeMsg, MyMsg, yourMsg };
