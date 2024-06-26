import styled from "styled-components";
import { Text } from "../../common";
import color from "../../../styles/color";
import { MyLikeRating, MyUnlikeRating } from "../../atoms";
const MyFreeBoardFooter = () => {
  return (
    <Container>
      <Text color={color.COLOR_GRAY_TEXT} size="0.7rem">
        내용내용내용내용
      </Text>
      <RatingDiv>
        <MyLikeRating />
        <MyUnlikeRating />
      </RatingDiv>
    </Container>
  );
};

export default MyFreeBoardFooter;

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
