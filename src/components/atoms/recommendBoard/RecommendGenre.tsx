import styled from "styled-components";

import color from "../../../styles/color";

import {
  RecommendGenreType,
  recommendGenreType,
} from "../../../types/recommendPostType";

type Props = {
  genre: RecommendGenreType;
};

const RecommendGenre = ({ genre }: Props) => {
  return (
    <Container>
      <Text>[{recommendGenreType[genre]}]</Text>
    </Container>
  );
};

export default RecommendGenre;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  font-size: 0.8rem;
  color: ${color.COLOR_GRAY_TEXT};
`;
