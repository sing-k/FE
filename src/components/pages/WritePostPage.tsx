import {
  useForm,
  FieldValues,
  UseFormReturn,
  SubmitHandler,
} from "react-hook-form";

import WritePostLayout from "../common/WritePostLayout";
import PostForm from "../organisms/board/PostForm";

import client from "../../config/axios";
import { useNavigate } from "react-router-dom";
import { pathName } from "../../App";

const WritePostPage = () => {
  const fieldValues: UseFormReturn = useForm<FieldValues>();

  const { handleSubmit } = fieldValues;
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    try {
      const res = await client.post(`/api/posts/free`, {
        title: data?.title,
        content: data?.content,
      });

      if (res.data.statusCode === 200 || res.data.statusCode === 201) {
        alert("자유 게시글이 등록되었습니다!");
        navigate(`${pathName.board}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WritePostLayout
      headerText="자유 게시글 작성"
      onClickPreview={() => console.log("preview")}
      onClickSubmit={handleSubmit(onSubmit)}
    >
      <PostForm fieldValues={fieldValues} />
    </WritePostLayout>
  );
};

export default WritePostPage;
