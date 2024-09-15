import styled from "styled-components";
import { MyStarRating, MyUnlikeRating, MyLikeRating } from "../../atoms";
interface AlbumReviewFooterType {
  prosCount: number;
  consCount: number;
  score: number;
}

const MyAlbumReviewFooter = ({
  prosCount,
  consCount,
  score,
}: AlbumReviewFooterType) => {
  return (
    <Container>
      <RatingDiv>
        <MyStarRating rating={score} />
        <RatingValue>{score}</RatingValue>
      </RatingDiv>
      <RatingDiv>
        <MyLikeRating likeCount={prosCount} />
        <MyUnlikeRating unLikeCount={consCount} />
      </RatingDiv>
    </Container>
  );
};

export default MyAlbumReviewFooter;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const RatingDiv = styled.div`
  display: flex;
  gap: 0.2rem;
`;
const RatingValue = styled.span`
  font-size: 1rem;
  font-weight: 700;
`;
