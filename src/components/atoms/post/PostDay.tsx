import styled from "styled-components";

import color from "../../../styles/color";

const PostDay = () => {
  return (
    <Container>
      <Text>2024.06.01</Text>
    </Container>
  );
};

export default PostDay;

const Container = styled.div``;

const Text = styled.span`
  font-size: 0.7rem;
  color: ${color.COLOR_GRAY_TEXT};
`;
