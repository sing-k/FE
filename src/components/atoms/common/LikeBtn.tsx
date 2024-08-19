import { useState, useCallback } from "react";

import styled from "styled-components";

import { FaThumbsUp } from "react-icons/fa";

import color from "../../../styles/color";

type Props = {
  count: number;
  like?: boolean;
  onClick?: () => void;
};

const LikeBtn = ({ count, like = false }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(like);

  const onClick = useCallback(() => {
    setIsLiked(!isLiked);
  }, [isLiked]);

  return (
    <Container onClick={onClick} className={isLiked ? "active" : "none"}>
      <FaThumbsUp /> {count}
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
  background-color: ${color.COLOR_LIGHTGRAY_BACKGROUND};

  display: flex;
  align-items: center;
  gap: 5px;

  &.active {
    border-color: ${color.COLOR_MAIN};
    background-color: ${color.COLOR_MAIN};
  }
`;
