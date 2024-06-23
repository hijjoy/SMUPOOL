import React from "react";
import * as S from "./MessageContainer.style";
import Profile from "../../assets/images/profile.webp";

const MessageContainer = ({ messageList }) => {
  console.log(messageList);
  return (
    <S.Container>
      {messageList?.map((message) => {
        return (
          <div key={message.id}>
            {/* TODO: message.sender.id === userId (useAuth훅사용) */}
            <S.MyMsgContainer>
              <S.MyMsg>{message.content}</S.MyMsg>
            </S.MyMsgContainer>
            <S.YourMsgContainer>{/* <S.yourMsg>{message.content}</S.yourMsg> */}</S.YourMsgContainer>
            {/* TODO: message.sender.id === userId (useAuth훅사용) */}
          </div>
        );
      })}
    </S.Container>
  );
};

export default MessageContainer;

// {messageList?.map((message) => {
//   return (
//     <div key={message._id}>
//       {message?.user?.name === "system" ? (
//         <S.WelcomeMsg>
//           <p>{message.chat}</p>
//         </S.WelcomeMsg>
//       ) : message?.user?.name === user?.name ? (
//         <S.MyMsg>
//           <div>{message.chat}</div>
//         </S.MyMsg>
//       ) : (
//         <S.yourMsg>
//           <img
//             src={Profile}
//             style={
//               (index === 0 ? { visibility: "visible" } : messageList[index - 1].user.name === user.name) ||
//               messageList[index - 1].user.name === "system"
//                 ? { visibility: "visible" }
//                 : { visibility: "hidden" }
//             }
//           />
//           <div>{message.chat}</div>
//         </S.yourMsg>
//       )}
//     </div>
//   );
// })}
