import styled from "styled-components";

import CoverRecord from "./CoverRecord";
import AlbumInfo from "./AlbumInfo";

import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";

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
  ${glassEffectStyle()}
  width: 100%;
  flex-shrink: 0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem;
  cursor: pointer;
`;
