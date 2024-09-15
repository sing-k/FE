import styled from "styled-components";

import { FaThumbsUp, FaCommentDots } from "react-icons/fa";

import color from "../../../styles/color";

type Props = {
  like: number;
  comments: number;
};

const PostLikeComments = ({ like, comments }: Props) => {
  return (
    <Container>
      <Wrapper>
        <FaThumbsUp /> {like}
      </Wrapper>

      <Wrapper>
        <FaCommentDots /> {comments}
      </Wrapper>
    </Container>
  );
};

export default PostLikeComments;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: ${color.COLOR_GRAY_TEXT};
  gap: 5px;
`;
