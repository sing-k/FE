import { useEffect } from "react";

import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import {
  useFreePostQuery,
  useUpdateFreePostMutation,
} from "../../hooks/queries/freePost";

import { pathName } from "../../App";

import { WritePostValues } from "../../types/writePostType";

import { checkPostBody } from "../../utils/writePost";

import WritePostLayout from "../common/WritePostLayout";
import PostForm from "../organisms/board/PostForm";
import Loading from "../common/Loading";
import ErrorMessage from "../common/ErrorMessage";

const UpdatePostPage = () => {
  const params = useParams();

  if (!params?.id) return;

  const postId = params.id;
  const { data, isLoading, isError, error } = useFreePostQuery(postId);

  const fieldValues: UseFormReturn<WritePostValues> =
    useForm<WritePostValues>();
  const { handleSubmit } = fieldValues;

  const updateFreePostMutation = useUpdateFreePostMutation(postId);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<WritePostValues> = async (
    data: WritePostValues
  ) => {
    const { title, content } = data;

    if (!checkPostBody(data)) return;

    const res = await updateFreePostMutation.mutateAsync({
      postId,
      title,
      content,
    });

    if (res) {
      alert("자유 게시글이 수정되었습니다!");
      navigate(`${pathName.board}/${postId}`);
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
