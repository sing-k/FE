import React from "react";

import styled from "styled-components";

import { useAlbumDetailQuery } from "../../../hooks/queries/albumDetail";

import AlbumDetailCard from "./AlbumDetailCard";
import AlbumTrackList from "./AlbumTrackList";

type Props = {
  albumId: string;
};

const AlbumDetailInfo = ({ albumId }: Props) => {
  const { data, isLoading, isError, error } = useAlbumDetailQuery(albumId);

  if (isLoading) return <>로딩중 {"><"}</>;
  if (isError) return <>미친 에러 {error.message}</>;

  return (
    <Container>
      <AlbumDetailCard data={data} />

      <AlbumTrackList tracks={data.tracks} />
    </Container>
  );
};

export default React.memo(AlbumDetailInfo);

const Container = styled.div``;
