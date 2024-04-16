import styled from "styled-components";

import {
  AlbumName,
  AlbumRating,
  AlbumType,
  ArtistName,
  AlbumRatingNum,
} from "../../atoms";

import color from "../../../styles/color";

const AlbumInfo = () => {
  return (
    <Container>
      <Wrapper>
        <AlbumName />
      </Wrapper>

      <Wrapper>
        <ArtistName />

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
  width: 100%;
  background-color: ${color.COLOR_TRANSPARENT_WHITE};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
