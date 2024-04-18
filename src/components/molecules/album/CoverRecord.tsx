import styled from "styled-components";

import { CoverImage, Record } from "../../atoms";

const CoverRecord = () => {
  return (
    <Container>
      <CoverImage />

      <Record />
    </Container>
  );
};

export default CoverRecord;

const Container = styled.div`
  width: 100%;
  aspect-ratio: 3 / 2;
  position: relative;
`;
