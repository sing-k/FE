import styled from "styled-components";

import { RecommendType } from "../../../types/recommendPostType";
import RecommendTypeLabel from "./RecommendTypeLabel";

type Props = {
  title: string;
  recommend: RecommendType;
};

const RecommendTitle = ({ title, recommend }: Props) => {
  return (
    <Container>
      <RecommendTypeLabel recommend={recommend} />

      <Title>{title}</Title>
    </Container>
  );
};

export default RecommendTitle;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.p`
  font-weight: bold;
`;
