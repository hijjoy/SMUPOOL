import * as S from "./Comments.style";
import Input from "../Input";
import { CiLock } from "react-icons/ci";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const Comments = () => {
  const comments = [
    {
      id: 1,
      content: "댓글이다 아아아",
      author: "게시판 관리자",
      date: "2026-04-19",
      childrenComment: [
        { id: 1, content: "대댓글이ㅏㄷ", author: "202010001 안녕녕", date: "2026-04-19" },
        { id: 2, content: "대댓글", author: "202010001 안녕녕", date: "2026-04-19" },
      ],
    },
    { id: 2, content: "댓글", author: "202010001 안녕녕", date: "2026-04-19", childrenComment: [] },
  ];

  return (
    <S.Container>
      <S.InputWrapper>
        <S.TextWrapper>
          <h4>댓글 작성</h4>
          <div>
            <CiLock /> 비밀댓글
            <input type="checkbox" />
          </div>
        </S.TextWrapper>
        <Input />
        <S.CommentWrapper>
          {comments.length === 0 ? (
            <h1>아직 댓글이 없습니다.</h1>
          ) : (
            <>
              <S.CommentsContainer>
                {comments.map((com) => (
                  <div>
                    <S.CommentBox key={com.id}>
                      <h5>{com.author}</h5>
                      <span>{com.content}</span>
                      <div>
                        <p>작성 날짜 :{com.date}</p>
                      </div>
                    </S.CommentBox>
                    {com.childrenComment.length !== 0 ? (
                      com.childrenComment.map((e, idx) => (
                        <>
                          <S.ChildrenCommentWrapper key={e.id}>
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
                        </>
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
                  </div>
                ))}
              </S.CommentsContainer>
            </>
          )}
        </S.CommentWrapper>
      </S.InputWrapper>
    </S.Container>
  );
};

export default Comments;
