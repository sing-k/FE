import { useForm, UseFormReturn, SubmitHandler } from "react-hook-form";

import WritePostLayout from "../common/WritePostLayout";
import PostForm from "../organisms/board/PostForm";

import { useNavigate } from "react-router-dom";
import { pathName } from "../../App";
import { useFreePostMutation } from "../../hooks/queries/freePost";
import { WritePostValues } from "../../types/writePostType";
import { checkPostBody } from "../../utils/writePost";

const WritePostPage = () => {
  const fieldValues: UseFormReturn<WritePostValues> =
    useForm<WritePostValues>();

  const { handleSubmit, watch } = fieldValues;
  const navigate = useNavigate();

  const freePostMutation = useFreePostMutation();

  const onSubmit: SubmitHandler<WritePostValues> = async (
    data: WritePostValues
  ) => {
    const { title, content } = data;

    if (!checkPostBody(data)) return;

    const res = await freePostMutation.mutateAsync({
      title,
      content,
    });

    if (res) {
      alert("자유 게시글이 등록되었습니다!");
      navigate(`${pathName.board}`);
    }
  };

  return (
    <WritePostLayout
      headerText="자유 게시글 작성"
      onClickSubmit={handleSubmit(onSubmit)}
      type="free"
      previewPost={{
        ...watch(),
      }}
    >
      <PostForm fieldValues={fieldValues} />
    </WritePostLayout>
  );
};

export default WritePostPage;
