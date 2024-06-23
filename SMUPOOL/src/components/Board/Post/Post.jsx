import * as S from "./Post.style";
import Pin from "../../../assets/images/pin.webp";
import Lock from "../../../assets/images/Lock.webp";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, createdAt, views, secret, notification, author } = post;
  const nav = useNavigate();

  const handleNav = () => {
    if (!secret) {
      nav(`/board/${id}`, { state: { password: null } });
    } else {
      const password = prompt("게시글 비밀번호를 입력하세요.");
      nav(`/board/${id}`, { state: { password: password } });
    }
  };

  return (
    <S.Container $pin={notification} onClick={handleNav}>
      <S.No>{notification ? <img src={Pin} /> : id}</S.No>
      <S.Title $pin={notification}>
        <span>{title}</span>
        {secret ? <img src={Lock} /> : null}
      </S.Title>
      <S.Wrapper>
        <div>{author.name}</div>
        <span>{createdAt.split("T")[0]}</span>
        <p>{views}</p>
      </S.Wrapper>
    </S.Container>
  );
};

export default Post;
