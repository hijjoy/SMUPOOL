import * as S from "./Comments.style";
import Input from "../Input";
import { CiLock } from "react-icons/ci";
import Comment from "./Comment";
import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../../api/comments";
import { useParams } from "react-router-dom";

const Comments = () => {
  const params = useParams();

  const { data } = useQuery({
    queryKey: ["comments", { id: params.id }],
    queryFn: () => getComments(params.id),
    staleTime: 10 * 1000,
  });

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
          {data?.length === 0 ? (
            <h1>아직 댓글이 없습니다.</h1>
          ) : (
            <S.CommentsContainer>
              {data?.map((e) => (
                <Comment com={e} key={e.id} />
              ))}
            </S.CommentsContainer>
          )}
        </S.CommentWrapper>
      </S.InputWrapper>
    </S.Container>
  );
};

export default Comments;
