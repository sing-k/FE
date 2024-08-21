import {
  useForm,
  FieldValues,
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
  RecommendType,
  recommendType,
} from "../../types/recommendPostType";

import { albumLinkToId, isValidYoutubeLink } from "../../utils/linkValidation";
import { useNavigate } from "react-router-dom";
import { pathName } from "../../App";
import { useRecommendPostMutation } from "../../hooks/queries/recommendPost";

const fieldKeys = {
  title: "title",
  content: "content",
  genre: "genre",
  type: "type",
  albumLink: "albumLink",
  youtubeLink: "youtubeLink",
  selectedFile: "selectedFile",
};

const defaultValues = {
  title: "",
  content: "",
  genre: Object.keys(recommendGenreType)[0],
  type: Object.keys(recommendType)[0],
  albumLink: "",
  youtubeLink: "",
  selectedFile: undefined,
};

const WriteRecommendPostPage = () => {
  const fieldValues: UseFormReturn = useForm<FieldValues>({
    defaultValues,
  });

  const { register, handleSubmit, control, watch } = fieldValues;

  const type: RecommendType = watch(fieldKeys.type) as RecommendType;
  const selectedFile = watch(fieldKeys.selectedFile);
  const albumLink = watch(fieldKeys.albumLink);
  const youtubeLink = watch(fieldKeys.youtubeLink);

  const recommendPostMutation = useRecommendPostMutation();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    if (!data.title || !data.content || !data.type || !data.genre) return;

    const { title, content, type, genre } = data;

    const link =
      type === "ALBUM"
        ? albumLinkToId(albumLink)
        : type === "YOUTUBE" && isValidYoutubeLink(youtubeLink)
          ? youtubeLink
          : undefined;

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
      headerText="음악 추천 게시글 작성"
      onClickPreview={() => console.log("preview")}
      onClickSubmit={handleSubmit(onSubmit)}
    >
      <PostForm fieldValues={fieldValues}>
        <Controller
          name={fieldKeys.genre}
          control={control}
          render={({ field }) => (
            <SelectBtnForm
              name={fieldKeys.genre}
              label={"장르"}
              items={recommendGenreType}
              field={field}
              register={register}
            />
          )}
        />

        <Controller
          name={fieldKeys.type}
          control={control}
          render={({ field }) => (
            <SelectBtnForm
              name={fieldKeys.type}
              label={"추천 정보"}
              items={recommendType}
              field={field}
              register={register}
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
