import styled from "styled-components";
import { FaCommentDots } from "react-icons/fa";
import color from "../../../styles/color";

const PostCommentNum = () => {
  return (
    <Container>
      <FaCommentDots /> 8
    </Container>
  );
};

export default PostCommentNum;

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: ${color.COLOR_GRAY_TEXT};
  gap: 5px;
`;
