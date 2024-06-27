import React from "react";

import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import { pathName } from "../../../App";

import { AlbumType } from "../../../types/albumType";
import { albumDummy } from "../../../dummy/album";

import AlbumCardItem from "./AlbumCardItem";
import AlbumListItem from "./AlbumListItem";

type AlbumItemType = "card" | "list";

type Props = {
  type?: AlbumItemType;
  data: AlbumType;
  width?: string;
  itemRef?: React.RefObject<HTMLDivElement>;
};

const AlbumItem = ({
  type = "card",
  data = albumDummy,
  width = "100%",
  itemRef,
}: Props) => {
  if (!data) return;

  const navigate = useNavigate();

  const goAlbumDetailPage = () => {
    navigate(`${pathName.album}/${data.id}`);
  };

  return (
    <Container ref={itemRef} style={{ width }} onClick={goAlbumDetailPage}>
      {type === "card" ? (
        <AlbumCardItem data={data} />
      ) : type === "list" ? (
        <AlbumListItem data={data} />
      ) : null}
    </Container>
  );
};

export default AlbumItem;

const Container = styled.div`
  width: 100%;
  flex: 1;
  min-width: 150px;
  display: flex;
`;
