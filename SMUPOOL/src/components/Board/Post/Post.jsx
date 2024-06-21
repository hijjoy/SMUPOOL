import * as S from "./Post.style";
import Pin from "../../../assets/images/pin.webp";
import Lock from "../../../assets/images/Lock.webp";
import { useNavigate } from "react-router-dom";

const Post = ({ post, pin, idx }) => {
  const { id, title, author, createdAt, see, lock } = post;
  const nav = useNavigate();
  return (
    <S.Container $pin={pin}>
      <S.No>{pin ? <img src={Pin} /> : idx}</S.No>
      <S.Title $pin={pin} onClick={() => nav(`/board/${id}`, { state: { ...post } })}>
        <span>{title}</span>
        {lock ? <img src={Lock} /> : null}
      </S.Title>
      <S.Wrapper>
        <div>{author}</div>
        <span>{createdAt}</span>
        <p>{see}</p>
      </S.Wrapper>
    </S.Container>
  );
};

export default Post;
