import styled from "styled-components";

import { FaThumbsUp } from "react-icons/fa";

import color from "../../../styles/color";

const PostLikeNum = () => {
  return (
    <Container>
      <FaThumbsUp /> 12
    </Container>
  );
};

export default PostLikeNum;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  color: ${color.COLOR_GRAY_TEXT};
`;
