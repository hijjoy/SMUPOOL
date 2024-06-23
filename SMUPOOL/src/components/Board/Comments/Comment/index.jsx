import { CiLock } from "react-icons/ci";
import * as S from "./Comment.style";
import Input from "../../Input";
import { useState } from "react";
import Recomments from "../recomments";
import { useMutation } from "@tanstack/react-query";
import { postComments } from "../../../../api/comments";
import { useParams } from "react-router-dom";

const Comment = ({ com, refetch }) => {
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const handleCreate = () => {
    setOpen((prev) => !prev);
  };

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
      parentId: com.id,
    });
  };

  return (
    <S.Container>
      {com.reply ? (
        <>
          <Recomments com={com} />
        </>
      ) : (
        <S.CommentBox>
          <h5>202110977 정혜원</h5>
          <div>{com.content}</div>
          <S.CommentBtn>
            <button onClick={handleCreate}>댓글쓰기</button>
            <p>작성 날짜 :{com.createdAt.split("T")[0]}</p>
          </S.CommentBtn>
          {open && (
            <div>
              <div>
                <CiLock /> 비밀댓글
                <input type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />
              </div>
              <Input value={comment} onChange={(e) => setComment(e.target.value)} onSubmit={handleSubmitComment} />
            </div>
          )}
        </S.CommentBox>
      )}
    </S.Container>
  );
};

export default Comment;
