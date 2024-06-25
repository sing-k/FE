import styled from "styled-components";
import { MyLikeRating, MyCommentRating, MyGenre } from "../../atoms";
const MyMusicFooter = () => {
  return (
    <Container>
      <MyGenre>[장르]</MyGenre>
      <RatingDiv>
        <MyLikeRating />
        <MyCommentRating />
      </RatingDiv>
    </Container>
  );
};

export default MyMusicFooter;

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
