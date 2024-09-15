import styled from "styled-components";

import { TrackType } from "../../../types/albumDetailType";

import color from "../../../styles/color";

import AlbumTrack from "../../molecules/albumDetail/AlbumTrack";

type Props = {
  tracks: TrackType[];
};

const AlbumTrackList = ({ tracks }: Props) => {
  tracks.sort((a, b) => a.trackNumber - b.trackNumber);

  return (
    <>
      <Container>
        <Text>Track List</Text>
        {tracks.map((track) => (
          <AlbumTrack key={track.id} track={track} />
        ))}
      </Container>
    </>
  );
};

export default AlbumTrackList;

const Container = styled.div`
  background-color: ${color.COLOR_TRANSPARENT_WHITE};
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;
