import styled from "styled-components";

import CoverRecord from "./CoverRecord";
import AlbumInfo from "./AlbumInfo";

import color from "../../../styles/color";

type Props = {
  width?: string;
};

const AlbumCard = ({ width }: Props) => {
  return (
    <Container style={width ? { width } : {}}>
      <CoverRecord />

      <AlbumInfo />
    </Container>
  );
};

export default AlbumCard;

const Container = styled.div`
  background-color: ${color.COLOR_TRANSPARENT_WHITE};
  width: 100%;
  flex-shrink: 0;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
`;
