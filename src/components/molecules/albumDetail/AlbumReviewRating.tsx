import styled from "styled-components";
import color from "../../../styles/color";

import { AlbumReviewStatisticType } from "../../../types/albumReviewStatisticType";

import DashboardBox from "../../templates/albumDetail/DashboardBox";
import StarRating from "../../atoms/albumDetail/StarRating";

type Props = {
  data: AlbumReviewStatisticType;
};

const AlbumReviewRating = ({ data }: Props) => {
  return (
    <DashboardBox text="평점">
      <RatingText>{data.averageScore} / 5</RatingText>
      <StarRating rating={data.averageScore} />
      <ReviewCountText>{data.count}명 참여</ReviewCountText>
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
