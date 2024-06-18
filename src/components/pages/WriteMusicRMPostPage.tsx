import {
  useForm,
  FieldValues,
  UseFormReturn,
  SubmitHandler,
} from "react-hook-form";

import WritePostLayout from "../common/WritePostLayout";
import PostForm from "../organisms/board/PostForm";

const WriteMusicRMPostPage = () => {
  const fieldValues: UseFormReturn = useForm<FieldValues>();

  const { handleSubmit } = fieldValues;

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <WritePostLayout
      headerText="음악 추천 게시글 작성"
      onClickPreview={() => console.log("preview")}
      onClickSubmit={handleSubmit(onSubmit)}
    >
      <PostForm fieldValues={fieldValues} />
    </WritePostLayout>
  );
};

export default WriteMusicRMPostPage;
