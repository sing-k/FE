import styled from "styled-components";

import {
  AlbumName,
  AlbumRating,
  ArtistName,
  AlbumRatingNum,
  AlbumGenre,
} from "../../atoms";

import { glassEffectStyle } from "../../../styles/style";
import { AlbumType } from "../../../types/albumType";

type Props = {
  data: AlbumType;
};

const AlbumInfo = ({ data }: Props) => {
  return (
    <Container>
      <Wrapper>
        <AlbumName name={data.name} />
      </Wrapper>

      <Wrapper>
        <ArtistName name={data.artists[0].name} />

        <AlbumRating averageScore={data.averageScore} />
      </Wrapper>

      <Wrapper>
        <AlbumGenre />

        <AlbumRatingNum count={data.count} />
      </Wrapper>
    </Container>
  );
};

export default AlbumInfo;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
