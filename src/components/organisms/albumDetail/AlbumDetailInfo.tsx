import React from "react";

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

export default React.memo(AlbumDetailInfo);

const Container = styled.div``;
