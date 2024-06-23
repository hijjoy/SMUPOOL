import { useState } from "react";
import * as S from "./Recomments.style";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const Recomments = ({ com }) => {
  const [open, setOpen] = useState(false);

  const handleCreate = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <S.ChildrenCommentWrapper>
        <h4>
          <MdOutlineSubdirectoryArrowRight />
          {com?.author.name}
        </h4>
        <span>{com?.content}</span>
        <p>작성 날짜 :{com?.createdAt.split("T")[0]}</p>
      </S.ChildrenCommentWrapper>
      <hr />
    </>
  );
};

export default Recomments;
