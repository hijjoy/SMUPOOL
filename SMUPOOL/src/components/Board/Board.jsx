import { useState } from "react";
import * as S from "./Board.style";
import Post from "./Post/Post";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { BsPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/posts";
import today from "../../utils/today";

const pinData = [
  {
    id: 1,
    title: "공지: 반드시 읽어주세요!",
    content: "내용 예시",
    author: "hijjoy",
    createdAt: "2024-05-27",
    see: 5,
    lock: false,
  },
  {
    id: 2,
    title: "자주 물어보는 질문 모음",
    content: "내용 예시",
    author: "hijjoy",
    createdAt: "2024-05-27",
    see: 4,
    lock: false,
  },
];

const data = [
  {
    id: 1,
    title: "wpahr",
    content: "내용 예시",
    author: "202110900 ㅂㅇㄱ",
    createdAt: today(),
    see: 4,
    lock: false,
  },
  {
    id: 2,
    title: "wpaddhrwpaddhrwpaddhrwpaddhr",
    content: "내용 예시",
    author: "202110900 ㅂㅇㄱ",
    createdAt: "2024-05-27",
    see: 7,
    lock: false,
  },
  {
    id: 3,
    title: "wpaddhrwpaddhrwpaddhrwpaddhrwpaddhrwpaddhrwpaddhrwpaddhrwpaddhrwpaddhrwpaddhrwpaddhrwpaddhrwpaddhr",
    content: "내용 예시",
    author: "202110900 ㅂㅇㄱ",
    createdAt: "2024-05-27",
    see: 4,
    lock: false,
  },
  {
    id: 4,
    title: "급한 질문입니다 !",
    content: "급한 질문입니다 내용 예시 !",
    author: "202110900 ㅂㅇㄱ",
    createdAt: "2024-05-27",
    see: 4,
    lock: true,
  },
  {
    id: 5,
    title: "wpaddhr",
    content: "내용 예시",
    author: "202110900 ㅂㅇㄱ",
    createdAt: "2024-05-27",
    see: 4,
    lock: false,
  },
  {
    id: 6,
    title: "wpaddhr",
    content: "내용 예시",
    author: "202110900 ㅂㅇㄱ",
    createdAt: "2024-05-27",
    see: 4,
    lock: false,
  },
  {
    id: 7,
    title: "냠냠",
    content: "내용 예시",
    author: "202110900 ㅂㅇㄱ",
    createdAt: "2024-05-27",
    see: 4,
    lock: false,
  },
];

const Board = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const nav = useNavigate();

  // const { data, isPending } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: getPosts,
  //   staleTime: 10 * 1000,
  // });

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
        {data.map(
          (
            e,
            idx, // reverse 일단 데이터에 따라 이후 수정
          ) => (
            <Post post={e} key={e.id} idx={idx + 1} />
          ),
        )}
      </S.PostWrapper>

      <S.FootWrapper>
        <S.Search>
          <input placeholder="Search" />
          <IoSearchSharp />
        </S.Search>
        <S.PageButton>
          <button onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage === 1}>
            <IoIosArrowBack />
          </button>
          {currentPage}
          <button onClick={() => setCurrentPage((prev) => prev + 1)}>
            <IoIosArrowForward />
          </button>
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
