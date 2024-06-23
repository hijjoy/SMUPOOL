import * as S from "./Comments.style";
import Input from "../Input";
import { CiLock } from "react-icons/ci";
import Comment from "./Comment";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getComments, postComments } from "../../../api/comments";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Comments = () => {
  const params = useParams();
  const [comment, setComment] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const { data, refetch } = useQuery({
    queryKey: ["comments", { id: params.id }],
    queryFn: () => getComments(params.id),
    staleTime: 10 * 1000,
  });

  const { mutate } = useMutation({
    mutationFn: postComments,
    onSuccess: () => {
      refetch();
      setComment("");
      setAnonymous(false);
    },
    onError: (error) => {
      console.error(error.response);
      alert("댓글 업로드 실패");
    },
  });

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      alert("댓글을 입력해주세요.");
      return;
    }
    mutate({
      content: comment,
      secret: anonymous,
      postId: params.id,
    });
  };

  return (
    <S.Container>
      <S.InputWrapper>
        <S.TextWrapper>
          <h4>댓글 작성</h4>
          <div>
            <CiLock /> 비밀댓글
            <input type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />
          </div>
        </S.TextWrapper>
        <Input value={comment} onChange={(e) => setComment(e.target.value)} onSubmit={handleSubmitComment} />
        <S.CommentWrapper>
          {data?.length === 0 ? (
            <h1>아직 댓글이 없습니다.</h1>
          ) : (
            <S.CommentsContainer>
              {data?.map((e) => (
                <Comment com={e} key={e.id} refetch={refetch} />
              ))}
            </S.CommentsContainer>
          )}
        </S.CommentWrapper>
      </S.InputWrapper>
    </S.Container>
  );
};

export default Comments;
