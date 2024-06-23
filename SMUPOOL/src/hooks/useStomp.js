import { Stomp } from "@stomp/stompjs";
import { useEffect, useState } from "react";

const useStomp = ({ showMessage }) => {
  const [stompClient, setStompClient] = useState(null);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const socket = new WebSocket("ws://43.202.8.75:8080/chat");
    const stompClient = Stomp.over(socket);

    stompClient.connect(
      {
        Authorization: `Bearer ${token}`,
      },
      (frame) => {
        stompClient.subscribe("/topic/public", (messageOutput) => {
          showMessage(JSON.parse(messageOutput.body));
        });
      },
      (error) => {
        console.error("STOMP connection error:", error);
      },
    );

    setStompClient(stompClient);

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, []);

  return { stompClient };
};

export default useStomp;
