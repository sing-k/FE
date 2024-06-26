import styled from "styled-components";
import { MyThumbnailType } from "../../atoms";
import { Text } from "../../common";
const MyMusicHeader = () => {
  return (
    <Container>
      <MyThumbnailType type="youtube" />
      <Text color="black" size="1rem" bold={700}>
        글 제목 부분
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
