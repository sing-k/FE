import styled from "styled-components";
import { MyLikeRating, MyCommentRating, MyGenre } from "../../atoms";

interface MyMusicFooterProps {
  genre: string;
  likeCount: number;
  commentCount: number;
}

const MyMusicFooter = ({
  genre,
  likeCount,
  commentCount,
}: MyMusicFooterProps) => {
  return (
    <Container>
      <MyGenre>{genre}</MyGenre>
      <RatingDiv>
        <MyLikeRating likeCount={likeCount} />
        <MyCommentRating commentCount={commentCount} />
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
