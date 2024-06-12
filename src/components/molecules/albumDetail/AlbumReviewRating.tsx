import styled from "styled-components";
import color from "../../../styles/color";

import DashboardBox from "../../templates/albumDetail/DashboardBox";
import StarRating from "../../atoms/albumDetail/StarRating";

type Props = {
  rating: number;
  reviewCount: number;
};

const AlbumReviewRating = ({ rating, reviewCount }: Props) => {
  return (
    <DashboardBox text="평점">
      <RatingText>{rating} / 5</RatingText>
      <StarRating rating={rating} />
      <ReviewCountText>{reviewCount}명 참여</ReviewCountText>
    </DashboardBox>
  );
};

export default AlbumReviewRating;

const RatingText = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
`;

const ReviewCountText = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${color.COLOR_GRAY_TEXT};
`;
