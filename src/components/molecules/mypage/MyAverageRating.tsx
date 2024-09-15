import styled from "styled-components";
import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";
import { UserDataStatistics } from "../../../types/authTypes";
import StarRating from "../../atoms/albumDetail/StarRating";
interface MyAverageRatingProps {
  data: UserDataStatistics;
}
const MyAverageRating = ({ data }: MyAverageRatingProps) => {
  return (
    <Container>
      <Text>평균 별점</Text>
      <Rating>{data.averageReviewScore} / 5</Rating>
      <StarRating rating={data.averageReviewScore} />
    </Container>
  );
};

export default MyAverageRating;

const Container = styled.div`
  ${glassEffectStyle()}
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  gap: 0.5rem;
`;
const Text = styled.div`
  font-size: 0.8rem;
  color: ${color.COLOR_GRAY_TEXT};
`;
const Rating = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
`;
