import { useNavigate, useParams } from "react-router-dom";
import * as S from "../Create/CreatePage.style";
import { useEffect, useState } from "react";
import { CiLock } from "react-icons/ci";
import SubmitButton from "../../../components/SubmitButton";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getDetailPost, updatePost } from "../../../api/posts.js";
import LoadingComponent from "../../../components/Loading/index";
import queryClient from "../../../api/queryClient.js";
import { toast } from "sonner";

const EditPage = () => {
  const [files, setFiles] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const { data, isPending } = useQuery({
    queryKey: ["posts", { id: params.id }],
    queryFn: () => getDetailPost(params.id),
  });

  const [userInput, setUserInput] = useState({
    title: "",
    content: "",
    // files: [],
    secret: false,
  });

  const { title, content, secret } = userInput;

  let dataContent;

  const { mutate } = useMutation({
    mutationFn: updatePost,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["posts", { id: params.id }],
      });
      toast.success("게시글 수정에 성공하였습니다 !");
      navigate(`/board/${params.id}`, { state: { password: null } });
    },
    onError: (error) => {
      error.response &&
        toast.error(error.response.data.message, {
          style: {
            color: "#fff",
            background: "#e05151",
          },
        });
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeFile = (e) => {
    const files = Array.from(e.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setFiles((prev) => [...prev, ...fileURLs]);
  };

  const handleSubmit = () => {
    if (title.trim() !== "" && content.trim() !== "") {
      mutate({ id: params.id, editData: userInput });
    } else {
      toast.error("제목과 본문을 입력하세요 !", {
        style: {
          color: "#fff",
          background: "#e05151",
        },
      });
    }
  };

  useEffect(() => {
    if (data) {
      setUserInput({
        title: data.title,
        content: data.content,
        secret: data.secret,
      });
    }
  }, [data]);

  if (isPending) {
    dataContent = <LoadingComponent />;
  }

  if (data) {
    dataContent = (
      <>
        <S.TitleInput type="text" name="title" value={title} onChange={handleChange} />
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
            <S.BtnBox>
              <SubmitButton text="작성" onClick={handleSubmit} />
            </S.BtnBox>
          </S.SubmitWrapper>
        </S.Wrapper>
      </>
    );
  }

  return <S.Container onSubmit={(e) => e.preventDefault()}>{dataContent}</S.Container>;
};

export default EditPage;
