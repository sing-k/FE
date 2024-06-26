import styled from "styled-components";
import { Text } from "../../common";
import color from "../../../styles/color";
import { MyBoardType, MyLikeRating, MyUnlikeRating } from "../../atoms";
const MyCommentFooter = () => {
  return (
    <Container>
      <TypeDiv>
        <MyBoardType type={"자유글"} />
        <Text color={color.COLOR_GRAY_TEXT} size="0.7rem">
          해당 게시글 제목
        </Text>
      </TypeDiv>
      <RatingDiv>
        <MyLikeRating />
        <MyUnlikeRating />
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
