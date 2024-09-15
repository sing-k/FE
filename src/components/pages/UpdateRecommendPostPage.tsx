import { useEffect } from "react";

import styled from "styled-components";

import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import {
  useRecommendPostQuery,
  useUpdateRecommendPostMutation,
} from "../../hooks/queries/recommendPost";

import { pathName } from "../../App";
import {
  recommendGenreType,
  recommendType,
} from "../../types/recommendPostType";
import { WritePostValues } from "../../types/writePostType";
import { checkPostBody } from "../../utils/writePost";

import WritePostLayout from "../common/WritePostLayout";
import PostForm from "../organisms/board/PostForm";
import Loading from "../common/Loading";
import ErrorMessage from "../common/ErrorMessage";
import RecommendThumbnail from "../atoms/recommendBoard/RecommendThumbnail";
import SelectBtn from "../atoms/recommendBoard/SelectBtn";
import SelectBtnLabel from "../atoms/recommendBoard/SelectBtnLabel";

const UpdateRecommendPostPage = () => {
  const params = useParams();

  if (!params?.id) return;

  const postId = params.id;
  const { data, isLoading, isError, error } = useRecommendPostQuery(postId);

  const fieldValues: UseFormReturn<WritePostValues> =
    useForm<WritePostValues>();
  const { handleSubmit, watch } = fieldValues;

  const updateRecommendPostMutation = useUpdateRecommendPostMutation(postId);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<WritePostValues> = async (
    data: WritePostValues
  ) => {
    const { title, content } = data;

    if (!checkPostBody({ title, content })) return;

    const res = await updateRecommendPostMutation.mutateAsync({
      postId,
      title,
      content,
    });

    if (res) {
      alert("음악 추천 게시글이 수정되었습니다!");
      navigate(`${pathName.musicRecommendationBoard}/${postId}`);
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
  if (!data) return;

  return (
    <WritePostLayout
      headerText="음악 추천 게시글 수정"
      onClickSubmit={handleSubmit(onSubmit)}
      type="recommend"
      values={{
        ...watch(),
        type: data.recommend,
        genre: data.genre,
        link: data.link,
      }}
    >
      <PostForm fieldValues={fieldValues}>
        <RecommendContentsWrapper>
          <Wrapper>
            <BtnWrapper>
              <SelectBtnLabel label="장르" />
              <SelectBtn
                text={recommendGenreType[data.genre]}
                className="selected"
              />
            </BtnWrapper>

            <BtnWrapper>
              <SelectBtnLabel label="추천 정보" />
              <SelectBtn
                text={recommendType[data.recommend]}
                className="selected"
              />
            </BtnWrapper>
          </Wrapper>

          <RecommendThumbnail recommend={data.recommend} link={data.link} />
        </RecommendContentsWrapper>
      </PostForm>
    </WritePostLayout>
  );
};

export default UpdateRecommendPostPage;

const RecommendContentsWrapper = styled.div`
  display: flex;
  max-width: 100%;
  gap: 1rem;
  width: max-content;
  height: 20vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;
