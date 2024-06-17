import styled from "styled-components";

import CoverRecord from "./CoverRecord";
import AlbumInfo from "./AlbumInfo";

import { glassEffectStyle } from "../../../styles/style";

type Props = {
  width?: string;
  data?: any;
};

const AlbumCard = ({ width, data }: Props) => {
  return (
    <Container style={width ? { width } : {}}>
      <CoverRecord data={data} />

      <AlbumInfo data={data} />
    </Container>
  );
};

export default AlbumCard;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  flex-shrink: 0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem;
  cursor: pointer;
`;
