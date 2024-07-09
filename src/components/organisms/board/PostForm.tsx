import React from "react";

import styled from "styled-components";

import { Controller, UseFormReturn } from "react-hook-form";
import ReactQuill from "react-quill";

import { modules, formats } from "../../../styles/quillStyle";
import color from "../../../styles/color";

type Props = {
  fieldValues: UseFormReturn;
  children?: React.ReactNode;
};

const PostForm = ({ fieldValues, children }: Props) => {
  const { register, control } = fieldValues;

  return (
    <Container>
      <TitleInput
        {...register("title", {
          required: "게시글 제목을 입력해주세요",
        })}
        placeholder="제목"
      />

      {/* 음악 추천 게시판 작성 페이지에서 추가 입력 사항 부분 */}
      {children && children}

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

const Container = styled.div`
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
    min-height: 100vh;
    font-size: 1rem;
  }
`;
