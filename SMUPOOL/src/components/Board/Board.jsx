import { useState } from "react";
import * as S from "./Board.style";
import Post from "./Post/Post";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { BsPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const pinData = [
  {
    id: 1,
    title: "공지: 반드시 읽어주세요!",
    author: "hijjoy",
    date: "2024-05-27",
    see: 5,
  },
  {
    id: 2,
    title: "자주 물어보는 질문 모음",
    author: "hijjoy",
    date: "2024-05-27",
    see: 4,
  },
];

const data = [
  {
    id: 1,
    title: "wpahr",
    author: "hijjoy",
    date: "2024-05-27",
    see: 4,
  },
  {
    id: 2,
    title: "wpaddhr",
    author: "hijjoy",
    date: "2024-05-27",
    see: 7,
  },
  {
    id: 3,
    title: "wpaddhr",
    author: "hijjoy",
    date: "2024-05-27",
    see: 4,
  },
  {
    id: 4,
    title: "wpaddhr",
    author: "hijjoy",
    date: "2024-05-27",
    see: 4,
  },
  {
    id: 5,
    title: "wpaddhr",
    author: "hijjoy",
    date: "2024-05-27",
    see: 4,
  },
  {
    id: 7,
    title: "wpaddhr",
    author: "hijjoy",
    date: "2024-05-27",
    see: 4,
  },
];

const Board = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const nav = useNavigate();

  return (
    <S.Container>
      <S.Attributes>
        <S.Number>NO</S.Number>
        <div>제목</div>
        <S.Wrapper>
          <div>작성자</div>
          <span>작성시간</span>
          <p>조회수</p>
        </S.Wrapper>
      </S.Attributes>
      <S.PostWrapper>
        {pinData.map((e) => (
          <Post post={e} key={e.id} pin={true} />
        ))}
        {data.reverse().map((e) => (
          <Post post={e} key={e.id} />
        ))}
      </S.PostWrapper>

      <S.FootWrapper>
        <S.Search>
          <input placeholder="Search" />
          <IoSearchSharp />
        </S.Search>
        <S.PageButton>
          <IoIosArrowBack />
          {currentPage} <IoIosArrowForward onClick={() => setCurrentPage((prev) => prev + 1)} />
        </S.PageButton>
        <S.Button onClick={() => nav("/board/create")}>
          글쓰기
          <BsPencilFill />
        </S.Button>
      </S.FootWrapper>
    </S.Container>
  );
};

export default Board;
