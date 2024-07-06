import React from "react";

import styled from "styled-components";

import { useAlbumDetailQuery } from "../../../hooks/queries/albumDetail";

import AlbumDetailCard from "./AlbumDetailCard";
import AlbumTrackList from "./AlbumTrackList";
import Loading from "../../common/Loading";
import ErrorMessage from "../../common/ErrorMessage";

type Props = {
  albumId: string;
};

const AlbumDetailInfo = ({ albumId }: Props) => {
  const { data, isLoading, isError, error } = useAlbumDetailQuery(albumId);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;

  return (
    <Container>
      <AlbumDetailCard data={data} />

      <AlbumTrackList tracks={data.tracks} />
    </Container>
  );
};

export default React.memo(AlbumDetailInfo);

const Container = styled.div``;
