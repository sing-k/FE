import { useState } from "react";

import styled from "styled-components";

import color from "../../../styles/color";

import { PostType } from "../../../types/postType";
import {
  WritePostValues,
  WriteRecommendValues,
} from "../../../types/writePostType";

import {
  saveTemporaryFreePost,
  saveTemporaryRecommendPost,
} from "../../../utils/auth/tokenStorage";

import PreviewPostModal from "../../organisms/board/PreviewPostModal";

type Props = {
  type: PostType;
  onClickSubmit?: () => void;
  values: WritePostValues | WriteRecommendValues;
  temporarySave?: boolean;
};

const WritePostFooter = ({
  onClickSubmit,
  type,
  values,
  temporarySave,
}: Props) => {
  const [preview, setPreview] = useState<boolean>(false);

  const onClickSaveTemporary = () => {
    if (type === "free") {
      saveTemporaryFreePost(values);
    } else {
      saveTemporaryRecommendPost(values as WriteRecommendValues);
    }
    alert("임시 저장 되었습니다.");
  };

  return (
    <>
      <Container>
        <Inner>
          <Btn onClick={() => setPreview(true)}>미리보기</Btn>

          <Wrapper>
            {temporarySave && (
              <Btn onClick={onClickSaveTemporary}>임시저장</Btn>
            )}

            <Btn className="submit" onClick={onClickSubmit}>
              등록
            </Btn>
          </Wrapper>
        </Inner>
      </Container>

      {preview && (
        <PreviewPostModal
          type={type}
          isOpen={preview}
          setIsOpen={setPreview}
          values={values}
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
