import styled from "styled-components";

import CoverRecord from "./CoverRecord";
import AlbumInfo from "./AlbumInfo";

import color from "../../../styles/color";

const AlbumCard = () => {
  return (
    <Container>
      <CoverRecord />

      <AlbumInfo />
    </Container>
  );
};

export default AlbumCard;

const Container = styled.div`
  background-color: ${color.COLOR_TRANSPARENT_WHITE};
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 15px;
  cursor: pointer;
`;
