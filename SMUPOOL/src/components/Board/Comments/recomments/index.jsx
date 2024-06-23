import { useState } from "react";
import * as S from "./Recomments.style";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const Recomments = ({ com }) => {
  const [open, setOpen] = useState(false);

  const handleCreate = () => {
    setOpen((prev) => !prev);
  };
  return (
    <S.Container>
      <S.CommentBox>
        <h5>202110977 정혜원</h5>
        <div>{com?.content}</div>
        <S.CommentBtn>
          <p>작성 날짜 :{com?.createdAt.split("T")[0]}</p>
        </S.CommentBtn>
      </S.CommentBox>
    </S.Container>
  );
};

export default Recomments;
