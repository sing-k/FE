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
  gap: 0.3rem;
`;

const ProfileImageDiv = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background-color: ${color.COLOR_GRAY_BACKGROUND};
  border: 1px solid ${color.COLOR_GRAY_BORDER};
`;

const Nickname = styled.p`
  font-size: 0.8rem;
`;
