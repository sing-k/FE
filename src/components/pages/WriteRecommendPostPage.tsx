import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  Controller,
} from "react-hook-form";

import WritePostLayout from "../common/WritePostLayout";
import PostForm from "../organisms/board/PostForm";
import SelectBtnForm from "../molecules/board/SelectBtnForm";
import SelectImageForm from "../molecules/board/SelectImageForm";
import SelectAlbumForm from "../molecules/board/SelectAlbumForm";
import SelectYoutubeForm from "../molecules/board/SelectYoutubeForm";

import {
  recommendGenreType,
  recommendType,
} from "../../types/recommendPostType";

import { useNavigate } from "react-router-dom";
import { pathName } from "../../App";
import { useRecommendPostMutation } from "../../hooks/queries/recommendPost";
import { WriteRecommendValues } from "../../types/writePostType";
import {
  checkPostBody,
  getLinkFromRecommendValues,
} from "../../utils/writePost";

const WriteRecommendPostPage = () => {
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

  const { register, handleSubmit, control, watch } = fieldValues;

  const type = watch("type");
  const selectedFile = watch("selectedFile");
  const albumLink = watch("albumLink");
  const youtubeLink = watch("youtubeLink");

  const recommendPostMutation = useRecommendPostMutation();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<WriteRecommendValues> = async (
    data: WriteRecommendValues
  ) => {
    const { title, content, type, genre } = data;

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
    }
  };

  return (
    <WritePostLayout
      type="recommend"
      previewPost={{
        title: fieldValues.getValues("title"),
        content: fieldValues.getValues("content"),
        genre: fieldValues.getValues("genre"),
        recommend: fieldValues.getValues("type"),
        link: getLinkFromRecommendValues(fieldValues.getValues()),
      }}
      headerText="음악 추천 게시글 작성"
      onClickPreview={() => console.log("preview")}
      onClickSubmit={handleSubmit(onSubmit)}
    >
      <PostForm fieldValues={fieldValues}>
        <Controller
          name={"genre"}
          control={control}
          render={({ field }) => (
            <SelectBtnForm
              label={"장르"}
              items={recommendGenreType}
              field={field}
            />
          )}
        />

        <Controller
          name={"type"}
          control={control}
          render={({ field }) => (
            <SelectBtnForm
              label={"추천 정보"}
              items={recommendType}
              field={field}
            />
          )}
        />

        {type === "IMAGE" ? (
          <SelectImageForm selectedFile={selectedFile} control={control} />
        ) : type === "ALBUM" ? (
          <SelectAlbumForm register={register} albumLink={albumLink} />
        ) : type === "YOUTUBE" ? (
          <SelectYoutubeForm register={register} youtubeLink={youtubeLink} />
        ) : null}
      </PostForm>
    </WritePostLayout>
  );
};

export default WriteRecommendPostPage;
