import React from "react";

import styled from "styled-components";

import AlbumReviewDashboard from "./AlbumReviewDashboard";
import AlbumReviewInput from "./AlbumReviewInput";
import AlbumReviewList from "./AlbumReviewList";

const AlbumDetailReview = () => {
  return (
    <Container>
      <AlbumReviewDashboard />

      <AlbumReviewInput />

      <AlbumReviewList />
    </Container>
  );
};

export default React.memo(AlbumDetailReview);

const Container = styled.div`
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
