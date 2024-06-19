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
import SelectMusicInfoForm from "../organisms/board/SelectMusicInfoForm";

const WriteMusicRMPostPage = () => {
  const fieldValues: UseFormReturn = useForm<FieldValues>({
    defaultValues: {
      genre: "발라드",
      info: "이미지",
    },
  });

  const { register, handleSubmit, control, watch } = fieldValues;

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <WritePostLayout
      headerText="음악 추천 게시글 작성"
      onClickPreview={() => console.log("preview")}
      onClickSubmit={handleSubmit(onSubmit)}
    >
      <PostForm fieldValues={fieldValues}>
        <Controller
          name="genre"
          control={control}
          defaultValue="발라드"
          render={({ field }) => (
            <SelectBtnForm
              name="genre"
              label={"장르"}
              items={["발라드", "힙합", "팝", "알앤비", "록", "클래식"]}
              field={field}
              register={register}
            />
          )}
        />

        <SelectMusicInfoForm
          register={register}
          control={control}
          value={watch("info")}
          name="info"
        />
      </PostForm>
    </WritePostLayout>
  );
};

export default WriteMusicRMPostPage;
