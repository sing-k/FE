import styled from "styled-components";
import color from "../../../styles/color";

import { dateFormat } from "../../../utils/date";

import StarRating from "../../atoms/albumDetail/StarRating";

type Props = {
  type: string;
  title: string;
  artist: string;
  releaseDate: string;
  genre: string;
  rating: number;
  reviewCount: number;
};

const AlbumDetailInfoText = (props: Props) => {
  return (
    <Container>
      <Type>[{props.type}]</Type>
      <Title>{props.title}</Title>
      <Artist>{props.artist}</Artist>
      <Box>
        <Wrapper>
          <Label>발매일</Label>
          <Text>{dateFormat(props.releaseDate)}</Text>
        </Wrapper>

        <Wrapper>
          <Label>장르</Label>
          <Text>{props.genre}</Text>
        </Wrapper>
      </Box>

      <RatingWrapper>
        <StarRating rating={props.rating} />

        <RatingText>
          평점 {props.rating} / {props.reviewCount}개의 평가
        </RatingText>
      </RatingWrapper>
    </Container>
  );
};

export default AlbumDetailInfoText;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Type = styled.p`
  font-size: 0.9rem;
  color: ${color.COLOR_GRAY_TEXT};
  margin-bottom: 0.5rem;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Artist = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${color.COLOR_PINK_TEXT};
  margin: 1rem 0;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const Wrapper = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Label = styled.p`
  color: ${color.COLOR_GRAY_TEXT};
`;

const Text = styled.p`
  color: ${color.COLOR_DARKGRAY_TEXT};
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const RatingText = styled.p`
  font-size: 0.9rem;
  color: ${color.COLOR_GRAY_TEXT};
  font-weight: 600;
`;
