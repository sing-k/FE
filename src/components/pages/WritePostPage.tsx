import { useEffect, useState } from "react";

import { useForm, UseFormReturn, SubmitHandler } from "react-hook-form";

import WritePostLayout from "../common/WritePostLayout";
import PostForm from "../organisms/board/PostForm";

import { useNavigate } from "react-router-dom";
import { pathName } from "../../App";
import { useFreePostMutation } from "../../hooks/queries/freePost";
import { WritePostValues } from "../../types/writePostType";
import { checkPostBody } from "../../utils/writePost";
import {
  clearTemporaryPost,
  getLoginState,
  getTemporaryFreePost,
} from "../../utils/auth/tokenStorage";

const WritePostPage = () => {
  const [savedPost, setSavedPost] = useState<WritePostValues | undefined>(
    undefined
  );

  const fieldValues: UseFormReturn<WritePostValues> =
    useForm<WritePostValues>();

  const { handleSubmit, watch, reset } = fieldValues;
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
      clearTemporaryPost("free");
    }
  };

  useEffect(() => {
    if (savedPost) {
      if (confirm("임시 저장된 자유 게시글을 불러오시겠습니까?")) {
        reset(savedPost);
      }
    }
  }, [savedPost]);

  useEffect(() => {
    if (getLoginState()) {
      const tmpPost = getTemporaryFreePost();

      if (tmpPost) setSavedPost({ ...tmpPost });
      else setSavedPost(undefined);
    }
  }, []);

  return (
    <WritePostLayout
      headerText="자유 게시글 작성"
      onClickSubmit={handleSubmit(onSubmit)}
      type="free"
      values={watch()}
      temporarySave={true}
    >
      <PostForm fieldValues={fieldValues} />
    </WritePostLayout>
  );
};

export default WritePostPage;
