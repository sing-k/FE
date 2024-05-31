import styled from "styled-components";

import AlbumDetailCard from "./AlbumDetailCard";
import AlbumTrackList from "./AlbumTrackList";

const AlbumDetailInfo = () => {
  return (
    <Container>
      <AlbumDetailCard />

      <AlbumTrackList />
    </Container>
  );
};

export default AlbumDetailInfo;

const Container = styled.div``;
