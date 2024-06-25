import styled from "styled-components";

import color from "../../../styles/color";

import PostInfo from "./PostInfo";
import LikeBtn from "../../atoms/common/LikeBtn";

const PostContents = () => {
  return (
    <Container>
      <PostInfo />

      <GrayLine />

      <ContentsWrapper>dddddd</ContentsWrapper>

      <LikeBtnWrapper>
        <LikeBtn />
      </LikeBtnWrapper>
    </Container>
  );
};

export default PostContents;

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GrayLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.COLOR_LIGHTGRAY_BORDER};
`;

const ContentsWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const LikeBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
