import styled from "styled-components";
import { MyStarRating, MyLikeRating, MyUnlikeRating } from "../../atoms";
const MyAlbumReviewFooter = () => {
  return (
    <Container>
      <MyStarRating rating={4} />
      <RatingDiv>
        <MyLikeRating />
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
