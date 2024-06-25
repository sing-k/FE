import styled from "styled-components";

import PostContents from "../../organisms/board/PostContents";
import PostComments from "../../organisms/board/PostComments";

const PostTemplate = () => {
  return (
    <Container>
      <PostContents />

      <PostComments />
    </Container>
  );
};

export default PostTemplate;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
