import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";

import { useAlbumReviewStatisticQuery } from "../../../hooks/queries/albumDetail";

import AlbumReviewRating from "../../molecules/albumDetail/AlbumReviewRating";
import AlbumScorePercentage from "../../molecules/albumDetail/AlbumScorePercentage";
import AlbumGenderPercentage from "../../molecules/albumDetail/AlbumGenderPercentage";
import Loading from "../../common/Loading";
import ErrorMessage from "../../common/ErrorMessage";

type Props = {
  albumId: string;
};

const AlbumReviewDashboard = ({ albumId }: Props) => {
  const { data, isLoading, isError, error } =
    useAlbumReviewStatisticQuery(albumId);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;

  return (
    <Container>
      <AlbumReviewRating data={data} />

      <AlbumScorePercentage data={data} />

      <AlbumGenderPercentage data={data} />
    </Container>
  );
};

export default AlbumReviewDashboard;

const Container = styled.div`
  ${glassEffectStyle()}

  width: 100%;
  padding: 1rem;
  border-radius: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
