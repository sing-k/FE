import styled from "styled-components";
import { PostCommentNum, PostLikeNum, PostWriter } from "../../atoms";
import PostDay from "../../atoms/post/PostDay";
import { glassEffectStyle } from "../../../styles/style";
import RecommendGenre from "./../../atoms/recommendBoard/RecommendGenre";
import RecommendBoardTitle from "./../../atoms/recommendBoard/RecommendBoardTitle";
import RecommendBoardCategory from "../../atoms/recommendBoard/RecommendBoardCategory";

const RecommendCard = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src="https://via.placeholder.com/400x200"
          alt="Recommend Image"
        />
      </ImageWrapper>

      <Contents>
        <FirstWrapper>
          <RecommendBoardCategory />
          <RecommendBoardTitle />
        </FirstWrapper>

        <Wrapper>
          <SmallWrapper>
            <PostWriter />
          </SmallWrapper>

          <SmallWrapper>
            <PostDay />
          </SmallWrapper>
        </Wrapper>

        <Wrapper>
          <SmallWrapper>
            <RecommendGenre></RecommendGenre>
          </SmallWrapper>
          <SmallWrapper>
            <PostLikeNum />
            <PostCommentNum />
          </SmallWrapper>
        </Wrapper>
      </Contents>
    </Container>
  );
};

export default RecommendCard;

const Container = styled.div`
  width: 300px; /* Card width */
  border-radius: 0.5rem;
  overflow: hidden; /* Ensure child elements are clipped */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  background-color: white; /* Ensure background color */
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px; /* Image height */
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Contents = styled.div`
  ${glassEffectStyle()}
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const FirstWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SmallWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
