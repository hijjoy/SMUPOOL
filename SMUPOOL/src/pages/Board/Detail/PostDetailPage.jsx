import { useLocation, useNavigate } from "react-router-dom";
import Comments from "../../../components/Board/Comments";
import * as S from "./PostDetailPage.style";
import { useMutation } from "@tanstack/react-query";
import { delectPost } from "../../../api/posts";
import queryClient from "../../../api/queryClient";

const PostDetailPage = () => {
  const location = useLocation();
  const nav = useNavigate();

  // const { mutate } = useMutation({
  //   mutationFn: delectPost,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({
  //       queryKey: ["posts"],
  //       refetchType: "none",
  //     });
  //     nav("/board");
  //   },
  // });

  // const handleDelete = () => {
  //   mutate(id);
  // };

  const { title, author, see, createdAt, content, id } = location.state;
  return (
    <S.Container>
      <S.Title>
        <h1>{title}</h1>
        <div>
          <p>작성자 : {author}</p>
          <p>작성 날짜 : {createdAt}</p>
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
