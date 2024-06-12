import { useState } from "react";
import * as S from "./CreatePage.style";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../../components/SubmitButton/index";

const CreatePage = () => {
  const nav = useNavigate();
  const [userInput, setUserInput] = useState({
    title: "",
    content: "",
    files: [],
    lock: false,
    pwd: "",
  });

  const { title, content, files, lock, pwd } = userInput;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeFile = (e) => {
    const files = Array.from(e.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setUserInput((prev) => ({
      ...prev,
      files: [...prev.files, ...fileURLs],
    }));
  };

  const handleSubmit = () => {
    if (title.trim() !== "" && content.trim() !== "") {
      // 백엔드 통신 후 게시판으로 이동
      nav("/board");
    } else {
      alert("제목과 본문을 입력하세요 !");
    }
  };

  return (
    <S.Container onSubmit={(e) => e.preventDefault()}>
      <S.TitleInput type="text" name="title" value={title} onChange={handleChange} placeholder="제목 입력" />
      <S.ContentInput name="content" value={content} onChange={handleChange} placeholder="본문 내용을 입력해주세요" />
      <S.Wrapper>
        <S.FileWrapper>
          <S.FileInput name="files" type="file" id="files" multiple onChange={handleChangeFile} />
          <S.FileBox>
            <label htmlFor="files">파일 선택</label>
            <p>선택된 파일 ({files.length}개)</p>
          </S.FileBox>
          <S.ImgBox>
            {files.map((e, idx) => (
              <img src={e} key={idx} />
            ))}
          </S.ImgBox>
        </S.FileWrapper>

        <S.SubmitWrapper>
          <S.Lockbox>
            <div>
              <CiLock /> 비밀 문의
              <input type="checkbox" value={lock} onClick={() => setUserInput((prev) => ({ ...prev, lock: !lock }))} />
            </div>
            <S.PwdInput name="pwd" type="password" value={pwd} onChange={handleChange} placeholder="비밀번호 입력" />
          </S.Lockbox>

          <S.BtnBox>
            <SubmitButton text="작성" onClick={handleSubmit} />
          </S.BtnBox>
        </S.SubmitWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default CreatePage;
