import styled from "styled-components";
import { Text } from "../../common";
import RecommendTypeLabel from "../../atoms/recommendBoard/RecommendTypeLabel";
import { RecommendType } from "../../../types/recommendPostType";

interface MyMusicHeaderProps {
  title: string;
  recommend: RecommendType;
}
const MyMusicHeader = ({ title, recommend }: MyMusicHeaderProps) => {
  return (
    <Container>
      <RecommendTypeLabel recommend={recommend} />
      <Text color="black" size="1rem" bold={700}>
        {title}
      </Text>
    </Container>
  );
};

export default MyMusicHeader;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.2rem;
`;
