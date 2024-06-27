import React from "react";

import styled from "styled-components";

import { AlbumDetailType } from "../../../types/albumDetailType";

import AlbumDetailCard from "./AlbumDetailCard";
import AlbumTrackList from "./AlbumTrackList";

type Props = {
  data: AlbumDetailType;
};

const AlbumDetailInfo = ({ data }: Props) => {
  return (
    <Container>
      <AlbumDetailCard data={data} />

      <AlbumTrackList tracks={data.tracks} />
    </Container>
  );
};

export default React.memo(AlbumDetailInfo);

const Container = styled.div``;
