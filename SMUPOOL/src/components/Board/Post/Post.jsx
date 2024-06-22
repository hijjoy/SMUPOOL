import * as S from "./Post.style";
import Pin from "../../../assets/images/pin.webp";
import Lock from "../../../assets/images/Lock.webp";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, createdAt, views, secret, notification } = post;
  const nav = useNavigate();
  return (
    <S.Container $pin={notification} onClick={() => nav(`/board/${id}`, { state: { ...post } })}>
      <S.No>{notification ? <img src={Pin} /> : id}</S.No>
      <S.Title $pin={notification}>
        <span>{title}</span>
        {secret ? <img src={Lock} /> : null}
      </S.Title>
      <S.Wrapper>
        <div>202110977 정혜원</div>
        <span>{createdAt.split("T")[0]}</span>
        <p>{views}</p>
      </S.Wrapper>
    </S.Container>
  );
};

export default Post;
