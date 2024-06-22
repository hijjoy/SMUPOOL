import { useState } from "react";
import * as S from "./Board.style";
import Post from "./Post/Post";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { BsPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/posts";
import useDebounce from "../../hooks/useDebounce";
import LoadingComponent from "../Loading";

const Board = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSerach] = useState("");
  const debounceSarch = useDebounce(search, 500);
  const nav = useNavigate();

  const { data, isPending } = useQuery({
    queryKey: ["posts", currentPage, debounceSarch],
    queryFn: () => getPosts(currentPage, debounceSarch),
    staleTime: 10 * 1000,
  });

  let content;

  if (isPending) {
    content = (
      <S.PostWrapper>
        <LoadingComponent />
      </S.PostWrapper>
    );
  }

  if (data) {
    content = (
      <S.PostWrapper>
        {data.map(
          (
            e,
            // reverse 일단 데이터에 따라 이후 수정
          ) => (
            <Post post={e} key={e.id} />
          ),
        )}
      </S.PostWrapper>
    );
  }

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
      {content}
      <S.FootWrapper>
        <S.Search>
          <input placeholder="Search" value={search} onChange={(e) => setSerach(e.target.value)} />
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
