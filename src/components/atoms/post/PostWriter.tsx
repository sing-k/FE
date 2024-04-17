import React from "react";

import styled from "styled-components";

import color from "../../../styles/color";

const PostWriter = () => {
  return (
    <Container>
      <ProfileImageDiv></ProfileImageDiv>

      <Nickname>baejb</Nickname>
    </Container>
  );
};

export default PostWriter;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ProfileImageDiv = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${color.COLOR_GRAY_BACKGROUND};
  border: 1px solid ${color.COLOR_GRAY_BORDER};
`;

const Nickname = styled.p`
  font-size: 1.1rem;
`;
