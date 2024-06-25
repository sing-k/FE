import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import color from "../../../styles/color";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const MyStarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  return (
    <StarWrapper>
      {[...Array(maxRating)].map((_, index) => (
        <StarIcon key={index} active={index < rating} />
      ))}
      <RatingValue>{rating}</RatingValue>
    </StarWrapper>
  );
};

export default MyStarRating;

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const StarIcon = styled(FaStar)<{ active: boolean }>`
  stroke: black;
  stroke-width: 10px;
  color: ${props =>
    props.active ? `${color.COLOR_STAR}` : `${color.COLOR_STAR_BACKGROUND}`};
`;

const RatingValue = styled.span`
  font-size: 1rem;
  font-weight: 700;
`;
