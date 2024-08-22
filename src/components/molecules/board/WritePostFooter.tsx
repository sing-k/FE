import { useState } from "react";

import styled from "styled-components";

import color from "../../../styles/color";

import { PostType } from "../../../types/postType";
import { PreviewPostType } from "../../../types/writePostType";

import PreviewPostModal from "../../organisms/board/PreviewPostModal";

type Props = {
  type: PostType;
  previewPost: PreviewPostType;
  onClickSubmit?: () => void;
};

const WritePostFooter = ({ onClickSubmit, type, previewPost }: Props) => {
  const [preview, setPreview] = useState<boolean>(false);

  return (
    <>
      <Container>
        <Inner>
          <Btn onClick={() => setPreview(true)}>미리보기</Btn>

          <Wrapper>
            <Btn onClick={() => {}}>임시저장</Btn>
            <Btn className="submit" onClick={onClickSubmit}>
              등록
            </Btn>
          </Wrapper>
        </Inner>
      </Container>

      {preview && (
        <PreviewPostModal
          type={type}
          previewPost={previewPost}
          isOpen={preview}
          setIsOpen={setPreview}
        />
      )}
    </>
  );
};

export default WritePostFooter;

const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 6rem;
  background-color: ${color.COLOR_FOOTER};
`;

const Inner = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Btn = styled.div`
  border: 1px solid ${color.COLOR_MAIN};
  background-color: white;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  cursor: pointer;

  &.submit {
    color: white;
    background-color: ${color.COLOR_MAIN};
  }
`;
