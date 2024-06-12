import styled from "styled-components";

import { FaStar } from "react-icons/fa";
import color from "../../../styles/color";

type Props = {
  rating: number;
};

const StarRating = ({ rating }: Props) => {
  const fullStars = Math.floor(rating);
  const partialStarPercentage = 100 - (rating - fullStars) * 100;

  return (
    <Container>
      {[...Array(5)].map((_, idx) => {
        return (
          <StarWrapper key={idx}>
            <BgStar />
            <Star
              style={
                idx === fullStars
                  ? { clipPath: `inset(0 ${partialStarPercentage}% 0 0)` }
                  : idx < fullStars
                    ? {}
                    : { display: "none" }
              }
            />
          </StarWrapper>
        );
      })}
    </Container>
  );
};

export default StarRating;

const Container = styled.div`
  display: flex;
  gap: 2px;
`;

const StarWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 1rem;
  aspect-ratio: 1 / 1;
`;

const BgStar = styled(FaStar)`
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${color.COLOR_STAR_BACKGROUND};
`;

const Star = styled(FaStar)`
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${color.COLOR_STAR};
`;
