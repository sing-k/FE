import styled from "styled-components";

import color from "../../../styles/color";

const PostTime = () => {
  return (
    <Container>
      <Text>1분전</Text>
    </Container>
  );
};

export default PostTime;

const Container = styled.div``;

const Text = styled.span`
  font-size: 0.7rem;
  color: ${color.COLOR_GRAY_TEXT};
`;
