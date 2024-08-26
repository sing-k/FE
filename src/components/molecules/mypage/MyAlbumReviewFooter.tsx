import styled from "styled-components";
import { MyStarRating, MyUnlikeRating } from "../../atoms";
const MyAlbumReviewFooter = () => {
  return (
    <Container>
      <RatingDiv>
        <MyStarRating rating={4} />
        <RatingValue>{4}</RatingValue>
      </RatingDiv>
      <RatingDiv>
        {/* <MyLikeRating /> 잠깐 빼놓음*/}
        <MyUnlikeRating />
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
