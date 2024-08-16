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
  RecommendPostRequestType,
  RecommendType,
  recommendType,
} from "../../types/recommendPostType";
import client from "../../config/axios";
import { albumLinkToId, isValidYoutubeLink } from "../../utils/linkValidation";
import { useNavigate } from "react-router-dom";
import { pathName } from "../../App";

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
  selectedFile: null,
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

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    try {
      const body: RecommendPostRequestType = {
        title: data?.title,
        content: data?.content,
        genre: data?.genre,
        type,
      };

      const formData = new FormData();

      formData.append(
        "post",
        new Blob([JSON.stringify(body)], {
          type: "application/json",
        })
      );

      if (type === "ALBUM") {
        const albumId = albumLinkToId(albumLink);
        if (!albumId) {
          alert("앨범 링크 주소를 확인해주세요!");
          return;
        }
        body.link = albumId;
      } else if (type === "YOUTUBE") {
        if (!isValidYoutubeLink(youtubeLink)) {
          alert("유튜브 링크 주소를 확인해주세요!");
          return;
        }
        body.link = youtubeLink;
      } else {
        if (!selectedFile) {
          alert("이미지를 선택해주세요!");
          return;
        }
        formData.append("image", selectedFile);
      }

      const res = await client.post("/api/posts/recommend", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { statusCode } = res.data;

      if (String(statusCode).startsWith("2")) {
        alert("음악 추천 게시글이 등록되었습니다!");
        navigate(`${pathName.musicRecommendationBoard}`);
      } else {
        throw new Error(res.data?.message || "Unknown Error");
      }
    } catch (err) {
      console.log(err);
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
