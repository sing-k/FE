import styled from "styled-components";
import { FaCommentDots } from "react-icons/fa";
import color from "../../../styles/color";

const PostCommentNum = () => {
  return (
    <Container>
      <CommentBtn>
        <FaCommentDots />
      </CommentBtn>

      <Text>8</Text>
    </Container>
  );
};

export default PostCommentNum;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  font-size: 0.7rem;
  color: ${color.COLOR_GRAY_TEXT};
`;

const CommentBtn = styled.div`
  margin-top: 0.2rem;
  margin-right: 0.3rem;
  color: gray;
`;
