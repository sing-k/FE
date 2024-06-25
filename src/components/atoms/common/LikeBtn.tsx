import { useState, useCallback } from "react";

import styled from "styled-components";

import { FaThumbsUp } from "react-icons/fa";

import color from "../../../styles/color";

const LikeBtn = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const onClick = useCallback(() => {
    setIsLiked(!isLiked);
  }, [isLiked]);

  return (
    <Container onClick={onClick} className={isLiked ? "active" : "none"}>
      <FaThumbsUp /> 12
    </Container>
  );
};

export default LikeBtn;

const Container = styled.div`
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  border: 1.5px solid ${color.COLOR_LIGHTGRAY_BACKGROUND};
  background-color: ${color.COLOR_LIGHTGRAY_BACKGROUND};

  display: flex;
  align-items: center;
  gap: 5px;
  transition: 0.2s;

  &:hover {
    border-color: ${color.COLOR_MAIN};
  }
  &.active {
    border-color: ${color.COLOR_MAIN};
    background-color: ${color.COLOR_MAIN};
  }
`;
