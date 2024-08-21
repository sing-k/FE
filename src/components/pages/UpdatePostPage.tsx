import { useEffect } from "react";

import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import {
  useFreePostQuery,
  useUpdateFreePostMutation,
} from "../../hooks/queries/freePost";

import { pathName } from "../../App";

import WritePostLayout from "../common/WritePostLayout";
import PostForm from "../organisms/board/PostForm";
import Loading from "../common/Loading";
import ErrorMessage from "../common/ErrorMessage";

const UpdatePostPage = () => {
  const params = useParams();

  if (!params?.id) return <>path에 자유 게시글 id 누락</>;

  const { data, isLoading, isError, error } = useFreePostQuery(params.id);

  const fieldValues: UseFormReturn = useForm<FieldValues>();
  const { handleSubmit } = fieldValues;

  const updateFreePostMutation = useUpdateFreePostMutation(params.id);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    if (!data?.title || !data?.content || !params?.id) return;

    const res = await updateFreePostMutation.mutateAsync({
      postId: params.id,
      title: data.title,
      content: data.content,
    });

    if (res) {
      alert("자유 게시글이 수정되었습니다!");
      navigate(`${pathName.board}/${params.id}`);
    }
  };

  useEffect(() => {
    if (data) {
      fieldValues.setValue("title", data.title);
      fieldValues.setValue("content", data.content);
    }
  }, [data]);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;

  return (
    <WritePostLayout
      headerText="자유 게시글 수정"
      onClickPreview={() => console.log("preview")}
      onClickSubmit={handleSubmit(onSubmit)}
    >
      <PostForm fieldValues={fieldValues} />
    </WritePostLayout>
  );
};

export default UpdatePostPage;
