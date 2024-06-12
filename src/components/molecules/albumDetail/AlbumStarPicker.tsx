import React from "react";

import styled from "styled-components";

import color from "../../../styles/color";

import { FaStar } from "react-icons/fa";

type Props = {
  stars: number;
  setStars: React.Dispatch<React.SetStateAction<number>>;
};

const AlbumStarPicker = ({ stars, setStars }: Props) => {
  const onClickStar = (index: number) => {
    setStars(index + 1);
  };

  return (
    <Container>
      {[...Array(5)].map((_, idx) => (
        <StyledStar
          key={`star_picker${idx}`}
          className={idx < stars ? "fill" : "empty"}
          onClick={onClickStar.bind(this, idx)}
        />
      ))}
    </Container>
  );
};

export default AlbumStarPicker;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StyledStar = styled(FaStar)`
  cursor: pointer;
  color: white;

  &.fill {
    color: ${color.COLOR_STAR};
  }
`;
