import styled from "styled-components";
import { AiTwotoneLike } from "react-icons/ai";
import color from "../../../styles/color";

const PostLikeNum = () => {
  return (
    <Container>
      <LikeBtn>
        <AiTwotoneLike />
      </LikeBtn>

      <Text>12</Text>
    </Container>
  );
};

export default PostLikeNum;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  font-size: 0.7rem;
  color: ${color.COLOR_GRAY_TEXT};
`;

const LikeBtn = styled.div`
  margin-top: 0.1rem;
  margin-right: 0.2rem;
  color: gray;
`;
