import styled from "styled-components";

import { CoverImage, Record } from "../../atoms";

const CoverRecord = ({ data }: any) => {
  return (
    <Container>
      <CoverImage data={data} />

      <Record />
    </Container>
  );
};

export default CoverRecord;

const Container = styled.div`
  width: 100%;
  aspect-ratio: 3 / 2;
  position: relative;
  flex-shirnk: 0;
`;
