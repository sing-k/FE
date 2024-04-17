import React from "react";

import styled from "styled-components";

import color from "../../../styles/color";

const PostLikeNum = () => {
  return (
    <Container>
      <Text>12</Text>
    </Container>
  );
};

export default PostLikeNum;

const Container = styled.div``;

const Text = styled.span`
  color: ${color.COLOR_GRAY_TEXT};
`;
