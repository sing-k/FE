import { useEffect, useState } from "react";

import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  // Controller,
} from "react-hook-form";

import WritePostLayout from "../common/WritePostLayout";
import PostForm from "../organisms/board/PostForm";
// import SelectBtnForm from "../molecules/board/SelectBtnForm";
import SelectImageForm from "../molecules/board/SelectImageForm";
import SelectAlbumForm from "../molecules/board/SelectAlbumForm";
import SelectYoutubeForm from "../molecules/board/SelectYoutubeForm";

// import {
//   recommendGenreType,
//   recommendType,
// } from "../../types/recommendPostType";

import { useLocation, useNavigate } from "react-router-dom";
import { pathName } from "../../App";
import { useRecommendPostMutation } from "../../hooks/queries/recommendPost";
import { WriteRecommendValues } from "../../types/writePostType";
import {
  checkPostBody,
  getLinkFromRecommendValues,
} from "../../utils/writePost";
import {
  clearTemporaryPost,
  getLoginState,
  getTemporaryRecommendPost,
} from "../../utils/auth/tokenStorage";

const WriteRecommendPostPage = () => {
  const [savedPost, setSavedPost] = useState<WriteRecommendValues | undefined>(
    undefined,
  );

  const fieldValues: UseFormReturn<WriteRecommendValues> =
    useForm<WriteRecommendValues>({
      defaultValues: {
        title: "",
        content: "",
        genre: "BALLAD",
        type: "IMAGE",
        albumLink: "",
        youtubeLink: "",
        selectedFile: undefined,
      },
    });

  const { register, handleSubmit, control, watch, reset, setValue } =
    fieldValues;

  const type = watch("type");

  const recommendPostMutation = useRecommendPostMutation();

  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit: SubmitHandler<WriteRecommendValues> = async (
    data: WriteRecommendValues,
  ) => {
    const { title, content, type, genre, selectedFile } = data;

    if (!checkPostBody({ title, content }) || !type || !genre) return;

    const link =
      type === "IMAGE" ? undefined : getLinkFromRecommendValues(data);

    const res = await recommendPostMutation.mutateAsync({
      title,
      content,
      genre,
      type,
      link,
      file: selectedFile,
    });

    if (res) {
      alert("음악 추천 게시글이 등록되었습니다!");
      navigate(`${pathName.musicRecommendationBoard}`);
      clearTemporaryPost("recommend");
    }
  };

  useEffect(() => {
    if (savedPost) {
      if (confirm("임시 저장된 음악 추천 게시글을 불러오시겠습니까?")) {
        reset(savedPost);
      }
    }
  }, [savedPost]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const albmuId = queryParams.get("albumId");

    if (albmuId) {
      setValue("type", "ALBUM");
      setValue(
        "albumLink",
        `${window.location.origin}${pathName.albumDetail}/${albmuId}`,
      );
    } else {
      if (getLoginState() && !savedPost) {
        const tmpPost = getTemporaryRecommendPost();

        if (tmpPost) {
          setSavedPost({ ...tmpPost });
        } else {
          setSavedPost(undefined);
        }
      }
    }
  }, [location.search]);

  return (
    <WritePostLayout
      type="recommend"
      values={watch()}
      headerText="음악 추천 게시글 작성"
      onClickSubmit={handleSubmit(onSubmit)}
      temporarySave={true}
    >
      <PostForm fieldValues={fieldValues}>
        {/* <Controller
          name={"genre"}
          control={control}
          render={({ field }) => (
            <SelectBtnForm
              label={"장르"}
              items={recommendGenreType}
              field={field}
            />
          )}
        /> */}

        {/* <Controller
          name={"type"}
          control={control}
          render={({ field }) => (
            <SelectBtnForm
              label={"추천 정보"}
              items={recommendType}
              field={field}
            />
          )}
        /> */}

        {type === "IMAGE" ? (
          <SelectImageForm
            selectedFile={watch("selectedFile")}
            control={control}
          />
        ) : type === "ALBUM" ? (
          <SelectAlbumForm register={register} albumLink={watch("albumLink")} />
        ) : type === "YOUTUBE" ? (
          <SelectYoutubeForm
            register={register}
            youtubeLink={watch("youtubeLink")}
          />
        ) : null}
      </PostForm>
    </WritePostLayout>
  );
};

export default WriteRecommendPostPage;
