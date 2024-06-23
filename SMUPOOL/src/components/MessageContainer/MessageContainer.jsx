import React from "react";
import * as S from "./MessageContainer.style";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../api/login";

const MessageContainer = ({ messageList }) => {
  const { data, isPending, isError } = useQuery({
    queryFn: getProfile,
    queryKey: ["profile"],
  });

  console.log(data);

  // 데이터가 아직 로드되지 않았거나 오류가 발생한 경우 처리
  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error loading profile</div>;

  // 콘솔 로그로 데이터 확인
  console.log("현재 사용자 이름:", data);
  console.log("메시지 리스트", messageList);

  return (
    <S.Container>
      {messageList?.map((message) => (
        <div key={message.id}>
          {/* data.name === '조이', message.name === 'kim' */}
          {data?.nickname === message?.name ? (
            <S.MyMsgContainer>
              <S.MyMessageContainer>
                <S.MyMsg>{message.content}</S.MyMsg>
                <span>{data.name}</span>
              </S.MyMessageContainer>
            </S.MyMsgContainer>
          ) : (
            <S.YourMsgContainer>
              <S.YourMessageContainer>
                <S.yourMsg>{message.content}</S.yourMsg>
                <span>{message.name}</span>
              </S.YourMessageContainer>
            </S.YourMsgContainer>
          )}
        </div>
      ))}
    </S.Container>
  );
};

export default MessageContainer;
