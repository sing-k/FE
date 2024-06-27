import styled from "styled-components";

import color from "../../../styles/color";

const RecommendGenre = () => {
  return (
    <Container>
      <Text>[장르]</Text>
    </Container>
  );
};

export default RecommendGenre;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  font-size: 0.7rem;
  color: ${color.COLOR_GRAY_TEXT};
`;
