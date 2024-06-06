import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";

import AlbumReviewRating from "../../molecules/albumDetail/AlbumReviewRating";
import AlbumScorePercentage from "../../molecules/albumDetail/AlbumScorePercentage";
import AlbumGenderPercentage from "../../molecules/albumDetail/AlbumGenderPercentage";

const AlbumReviewDashboard = () => {
  return (
    <Container>
      <AlbumReviewRating rating={4.5} reviewCount={123} />

      <AlbumScorePercentage />

      <AlbumGenderPercentage />
    </Container>
  );
};

export default AlbumReviewDashboard;

const Container = styled.div`
  ${glassEffectStyle()}

  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
