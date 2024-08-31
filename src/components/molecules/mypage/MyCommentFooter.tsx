import styled from "styled-components";
import { MyBoardType, MyLikeRating } from "../../atoms";

interface MyCommentFooterType {
  type: string;
  likeCount: number;
  // unLikeCount?: number;
}
const MyCommentFooter = ({ type, likeCount }: MyCommentFooterType) => {
  return (
    <Container>
      <TypeDiv>
        <MyBoardType type={type} />
        {/* <Text color={color.COLOR_GRAY_TEXT} size="0.7rem">
          해당 게시글 제목
        </Text> */}
      </TypeDiv>
      <RatingDiv>
        <MyLikeRating likeCount={likeCount} />
        {/* <MyUnlikeRating unLikeCount={unLikeCount} /> */}
      </RatingDiv>
    </Container>
  );
};

export default MyCommentFooter;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TypeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
`;
const RatingDiv = styled.div`
  display: flex;
  gap: 0.2rem;
`;
