import {
  useForm,
  FieldValues,
  UseFormReturn,
  SubmitHandler,
} from "react-hook-form";

import WritePostLayout from "../common/WritePostLayout";
import PostForm from "../organisms/board/PostForm";

import { useNavigate } from "react-router-dom";
import { pathName } from "../../App";
import { useFreePostMutation } from "../../hooks/queries/freePost";

const WritePostPage = () => {
  const fieldValues: UseFormReturn = useForm<FieldValues>();

  const { handleSubmit } = fieldValues;
  const navigate = useNavigate();

  const freePostMutation = useFreePostMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    if (!data?.title) return;
    if (!data?.content) return;

    const res = await freePostMutation.mutateAsync({
      title: data.title,
      content: data.content,
    });

    if (res) {
      alert("자유 게시글이 등록되었습니다!");
      navigate(`${pathName.board}`);
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
