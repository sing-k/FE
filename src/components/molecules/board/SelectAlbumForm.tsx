import { useState, useEffect } from "react";
import { UseFormRegister } from "react-hook-form";

import styled from "styled-components";

import color from "../../../styles/color";

import { albumLinkToId } from "../../../utils/linkValidation";
import { getAlbumDetail } from "../../../api/albumDetail";
import { AlbumDetailType } from "../../../types/albumDetailType";
import { WriteRecommendValues } from "../../../types/writePostType";

import LinkInput from "./LinkInput";
import AlbumDetailCard from "../../organisms/albumDetail/AlbumDetailCard";

type Props = {
  register: UseFormRegister<WriteRecommendValues>;
  albumLink?: string;
};

const SelectAlbumForm = ({ register, albumLink }: Props) => {
  const [albumData, setAlbumData] = useState<AlbumDetailType | null>(null);

  const getAlbumData = async () => {
    const albumId = albumLinkToId(albumLink);

    if (!albumId || albumId === "") return;

    const res = await getAlbumDetail(albumId);

    setAlbumData(res);
  };

  useEffect(() => {
    if (albumLink) {
      getAlbumData();
    }
  }, [albumLink]);

  return (
    <Container>
      <LinkInput
        placeholder="추천할 앨범의 페이지 링크를 입력해 주세요!"
        register={register}
        name="albumLink"
      />

      {albumData && (
        <AlbumDetailCard
          data={albumData}
          style={{
            border: `1px solid ${color.COLOR_LIGHTGRAY_BORDER}`,
            marginTop: "1rem",
          }}
        />
      )}
    </Container>
  );
};

export default SelectAlbumForm;

const Container = styled.div`
  width: 100%;
`;
