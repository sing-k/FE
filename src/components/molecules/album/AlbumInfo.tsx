import styled from "styled-components";

import {
  AlbumName,
  AlbumRating,
  AlbumType,
  ArtistName,
  AlbumRatingNum,
} from "../../atoms";

import { glassEffectStyle } from "../../../styles/style";

const AlbumInfo = ({ data }: any) => {
  return (
    <Container>
      <Wrapper>
        <AlbumName data={data} />
      </Wrapper>

      <Wrapper>
        <ArtistName data={data} />

        <AlbumRating />
      </Wrapper>

      <Wrapper>
        <AlbumType />

        <AlbumRatingNum />
      </Wrapper>
    </Container>
  );
};

export default AlbumInfo;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  border-radius: 0.3rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
