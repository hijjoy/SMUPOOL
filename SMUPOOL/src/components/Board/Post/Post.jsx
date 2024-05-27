import * as S from "./Post.style";
import Pin from "../../../assets/images/pin.webp";

const Post = ({ post, pin }) => {
  const { id, title, author, date, see } = post;
  return (
    <S.Container $pin={pin}>
      <S.No>{pin ? <img src={Pin} /> : id}</S.No>
      <S.Title $pin={pin}>{title}</S.Title>
      <S.Wrapper>
        <div>{author}</div>
        <span>{date}</span>
        <p>{see}</p>
      </S.Wrapper>
    </S.Container>
  );
};

export default Post;
