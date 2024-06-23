import { CiLock } from "react-icons/ci";
import * as S from "./Comment.style";
import Input from "../../Input";
import { useState } from "react";
import Recomments from "../recomments";
import { useMutation } from "@tanstack/react-query";
import { postComments, DeteleComment } from "../../../../api/comments";
import { useParams } from "react-router-dom";
import EditPage from "../../../../pages/Board/Edit/EditPage";

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

  const { mutate: deleteMutate } = useMutation({
    mutationFn: DeteleComment,
    onSuccess: () => {
      console.log("성공");
      refetch();
    },
    onError: (error) => {
      console.error(error.response);
      alert("댓글 삭제 실패");
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

  const handleDeleteComment = (e, id) => {
    e.preventDefault();
    deleteMutate(id);
  };

  return (
    <S.Container>
      <S.CommentBox>
        <h5>{com.author.name}</h5>
        <div>{com.content}</div>
        <S.CommentBtn>
          <button onClick={handleCreate}>댓글쓰기</button>
          <p>작성 날짜 :{com.createdAt.split("T")[0]}</p>
          <S.Deletebtn onClick={(e) => handleDeleteComment(e, com.id)}>삭제</S.Deletebtn>
        </S.CommentBtn>
      </S.CommentBox>
      {com.children?.map((e) => (
        <Recomments key={e.id} com={e} />
      ))}
      <S.CComent $open={open}>
        <S.ChildrenInputWrapper $open={open}>
          <div>
            <Input
              comment={true}
              onSubmit={handleSubmitComment}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <span>
            <CiLock /> 비밀댓글
            <input type="checkbox" />
          </span>
        </S.ChildrenInputWrapper>
      </S.CComent>
    </S.Container>
  );
};

export default Comment;
