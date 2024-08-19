import styled from "styled-components";

import { GeneralPostType, PostType } from "../../../types/postType";

import PostContents from "../../organisms/board/PostContents";
import PostComments from "../../organisms/board/PostComments";

type Props = {
  type: PostType;
  post: GeneralPostType;
};

const PostTemplate = ({ type, post }: Props) => {
  return (
    <Container>
      <PostContents type={type} post={post} />

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
