import styled from "styled-components";

import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import ReactQuill from "react-quill";

import { modules, formats } from "../../../styles/quillStyle";
import color from "../../../styles/color";

type Props = {
  type?: string | null;
};

const PostForm = ({}: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <TitleInput
        {...register("title", {
          required: "게시글 제목을 입력해주세요",
        })}
        placeholder="제목"
      />

      <Controller
        name="content"
        control={control}
        defaultValue=""
        rules={{ required: "게시글 내용을 작성해주세요" }}
        render={({ field }) => {
          return (
            <StyledReactQuill
              {...field}
              modules={modules}
              formats={formats}
              placeholder="게시글 내용을 작성해주세요"
            />
          );
        }}
      />
    </Container>
  );
};

export default PostForm;

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TitleInput = styled.input`
  width: 100%;
  border: 1px solid ${color.COLOR_LIGHTGRAY_BORDER};
  outline: none;
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
`;

const StyledReactQuill = styled(ReactQuill)`
  width: 100%;
  border: 1px solid ${color.COLOR_LIGHTGRAY_BORDER};
  padding: 0;
  border-radius: 5px;

  /* 원하는 스타일 설정 */
  .ql-toolbar {
    background-color: white;
    position: sticky;
    top: calc(4rem + 3px); // WritePostHeader 높이만큼
    left: 0;
    z-index: 10;
    border: none;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid ${color.COLOR_LIGHTGRAY_BORDER};
  }

  .ql-container {
    border: none;
  }

  .ql-editor {
    min-height: 50vh;
    font-size: 1rem;
  }
`;
