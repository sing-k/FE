import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";

import { AlbumType } from "../../../types/albumType";

import CoverRecord from "./CoverRecord";
import AlbumInfo from "./AlbumInfo";

type Props = {
  width?: string;
  data: AlbumType;
};

const AlbumCardItem = ({ width = "100%", data }: Props) => {
  return (
    <Container style={{ width }}>
      <CoverRecord data={data} />

      <AlbumInfo data={data} />
    </Container>
  );
};

export default AlbumCardItem;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  flex: 1;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem;
  cursor: pointer;
`;
