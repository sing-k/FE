import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";

import AlbumTrack from "../../molecules/albumDetail/AlbumTrack";

const AlbumTrackList = () => {
  return (
    <Container>
      <Text>Track List</Text>
      {[...Array(5)].map((_, idx) => (
        <AlbumTrack key={idx} number={idx + 1} />
      ))}
    </Container>
  );
};

export default AlbumTrackList;

const Container = styled.div`
  ${glassEffectStyle()}
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
