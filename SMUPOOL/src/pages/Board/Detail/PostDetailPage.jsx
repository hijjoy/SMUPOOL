import Comments from "../../../components/Board/Comments";
import * as S from "./PostDetailPage.style";

const PostDetailPage = () => {
  const data = {
    id: 1,
    title: "제목 예시",
    content: "내용 예시",
    author: "202110900 ㅂㅇㄱ",
    date: "2024-06-21",
    see: 4,
    lock: false,
  };

  const { title, author, see, date, content } = data;
  return (
    <S.Container>
      <S.Title>
        <h1>{title}</h1>
        <div>
          <p>작성자 : {author}</p>
          <p>작성 날짜 : {date}</p>
          <p>조회수: {see}</p>
        </div>
      </S.Title>
      <S.ContentWrapper>
        <S.Content>{content}</S.Content>
        <S.BtnBox>
          <button>수정</button>
          <button>삭제</button>
        </S.BtnBox>
        <S.BtnBox2>
          <button>신고</button>
          <button>목록</button>
        </S.BtnBox2>
      </S.ContentWrapper>
      <S.CommentWrapper>
        <Comments />
      </S.CommentWrapper>
    </S.Container>
  );
};

export default PostDetailPage;
