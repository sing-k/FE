import { ChangeEvent, useState } from "react";

import styled from "styled-components";
import color from "../../../styles/color";

import { isAlbumURL } from "../../../utils/url";

import { useAlbumDetailQuery } from "../../../hooks/queries/albumDetail";

import LinkInput from "./LinkInput";
import Loading from "../../common/Loading";
import ErrorMessage from "../../common/ErrorMessage";
import AlbumDetailCard from "../../organisms/albumDetail/AlbumDetailCard";

const SelectAlbumForm = () => {
  const [input, setInput] = useState<string>("");
  const [albumId, setAlbumId] = useState<string>("");

  const { data, isLoading, isError } = useAlbumDetailQuery(albumId);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;

    if (!isAlbumURL(url)) {
      setAlbumId("");
      return;
    }

    const pathSegments = new URL(url).pathname.split("/").filter(Boolean); // 빈 문자열 제거
    const id =
      pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : "";

    setAlbumId(id);
  };

  return (
    <Container>
      <LinkInput
        input={input}
        setInput={setInput}
        handleChange={handleChange}
        placeholder="추천할 앨범의 페이지 링크를 입력해 주세요!"
        linkId={albumId}
      />

      {isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorMessage />
      ) : data ? (
        <AlbumContainer>
          <AlbumDetailCard data={data} />
        </AlbumContainer>
      ) : (
        albumId && (
          <ErrorMessage message="앨범이 존재하지 않아요! 링크를 다시 한번 확인해주세요" />
        )
      )}
    </Container>
  );
};

export default SelectAlbumForm;

const Container = styled.div`
  width: 100%;
`;

const AlbumContainer = styled.div`
  width: 50%;
  min-width: 200px;
  margin-top: 1rem;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid ${color.COLOR_LIGHTGRAY_BORDER};
`;
