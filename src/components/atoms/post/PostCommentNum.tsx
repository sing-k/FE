import styled from "styled-components";

import color from "../../../styles/color";

const PostCommentNum = () => {
  return (
    <Container>
      <Text>8</Text>
    </Container>
  );
};

export default PostCommentNum;

const Container = styled.div``;

const Text = styled.span`
  font-size: 0.7rem;
  color: ${color.COLOR_GRAY_TEXT};
`;
