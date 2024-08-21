import styled from "styled-components";

import color from "../../../styles/color";

import { FaArrowAltCircleRight } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { RecommendType } from "../../../types/recommendPostType";

import { parsingAlbumId } from "../../../utils/linkValidation";
import { useAlbumDetailQuery } from "../../../hooks/queries/albumDetail";

import { pathName } from "../../../App";

import RecommendYoutube from "./RecommendYoutube";
import Loading from "../../common/Loading";
import ErrorMessage from "../../common/ErrorMessage";
import { CoverRecord } from "../../molecules";

type Props = {
  recommend: RecommendType;
  link: string;
};

const RecommendAlbum = ({ albumId }: { albumId: string }) => {
  const { data, isLoading, isError, error } = useAlbumDetailQuery(albumId);

  const navigate = useNavigate();
  const goAlbumDetailPage = () => {
    navigate(`${pathName.albumDetail}/${albumId}`);
  };

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;

  return (
    <>
      <CoverRecord data={data} />

      <AlbumBtn onClick={goAlbumDetailPage}>
        앨범 보러가기
        <FaArrowAltCircleRight />
      </AlbumBtn>
    </>
  );
};

const RecommendContents = ({ recommend, link }: Props) => {
  return (
    <Container>
      <Contents>
        {recommend === "IMAGE" ? (
          <Image src={link} />
        ) : recommend === "YOUTUBE" ? (
          <RecommendYoutube youtubeLink={link} />
        ) : (
          <RecommendAlbum albumId={parsingAlbumId(link)} />
        )}
      </Contents>
    </Container>
  );
};

export default RecommendContents;

const Container = styled.div`
  width: 100%;
`;

const Contents = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

const AlbumBtn = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 0.5rem 1.2rem;
  gap: 0.3rem;
  border-radius: 2rem;
  background-color: ${color.COLOR_MAIN};
  color: white;
  font-weight: bold;
  margin: 1rem auto;
  cursor: pointer;
  border: 2px solid ${color.COLOR_MAIN};
  transition: 0.45s;

  &:hover {
    background-color: white;
    color: ${color.COLOR_MAIN};
  }
`;
