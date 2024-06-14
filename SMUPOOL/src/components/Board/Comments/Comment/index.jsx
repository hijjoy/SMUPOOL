import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { CiLock } from "react-icons/ci";

import * as S from "./Comment.style";
import Input from "../../Input";
import { useState } from "react";

const Comment = ({ com }) => {
  const [open, setOpen] = useState(false);

  const handleCreate = () => {
    setOpen((prev) => !prev);
  };
  return (
    <S.Container>
      <S.CommentBox>
        <h5>{com.author}</h5>
        <div>{com.content}</div>
        <S.CommentBtn>
          <button onClick={handleCreate}>댓글쓰기</button>
          <p>작성 날짜 :{com.date}</p>
        </S.CommentBtn>
      </S.CommentBox>
      {com.childrenComment.length !== 0 ? (
        com.childrenComment.map((e, idx) => (
          <div key={e.id}>
            <S.ChildrenCommentWrapper>
              <h4>
                <MdOutlineSubdirectoryArrowRight />
                {e.author}
              </h4>
              <span>{e.content}</span>
              <p>작성 날짜 :{e.date}</p>
            </S.ChildrenCommentWrapper>

            {com.childrenComment.length - 1 !== idx ? (
              <hr />
            ) : (
              <S.CComent $open={open}>
                <hr />
                <S.ChildrenInputWrapper $open={open}>
                  <div>
                    <MdOutlineSubdirectoryArrowRight />
                    <Input comment={true} />
                  </div>
                  <span>
                    <CiLock /> 비밀댓글
                    <input type="checkbox" />
                  </span>
                </S.ChildrenInputWrapper>
              </S.CComent>
            )}
          </div>
        ))
      ) : (
        <S.ChildrenInputWrapper $open={open}>
          <div>
            <MdOutlineSubdirectoryArrowRight />
            <Input comment={true} />
          </div>
          <span>
            <CiLock /> 비밀댓글
            <input type="checkbox" />
          </span>
        </S.ChildrenInputWrapper>
      )}
    </S.Container>
  );
};

export default Comment;
