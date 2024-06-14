import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { CiLock } from "react-icons/ci";

import * as S from "./Comment.style";
import Input from "../../Input";

const Comment = ({ com }) => {
  return (
    <S.Container>
      <S.CommentBox>
        <h5>{com.author}</h5>
        <span>{com.content}</span>
        <div>
          <p>작성 날짜 :{com.date}</p>
        </div>
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
              <div>
                <p>작성 날짜 :{e.date}</p>
              </div>
            </S.ChildrenCommentWrapper>
            <hr />
            {com.childrenComment.length - 1 !== idx ? null : (
              <S.ChildrenInputWrapper>
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
          </div>
        ))
      ) : (
        <S.ChildrenInputWrapper>
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
