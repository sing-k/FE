import React from "react";

import styled from "styled-components";

import AlbumReviewDashboard from "./AlbumReviewDashboard";

const AlbumDetailReview = () => {
  return (
    <Container>
      <AlbumReviewDashboard />
    </Container>
  );
};

export default React.memo(AlbumDetailReview);

const Container = styled.div``;
