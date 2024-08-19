import { useState } from "react";

import styled from "styled-components";

import { FaThumbsUp } from "react-icons/fa";

import color from "../../../styles/color";
import { useMemberInfoQuery } from "../../../hooks/queries/user";

type Props = {
  count: number;
  like: boolean;
  id: string;
  writerId: string;
  handleLike: (id: any) => void;
  handleUnlike: (id: any) => void;
};

const LikeBtn = ({
  count,
  like = false,
  id,
  writerId,
  handleLike,
  handleUnlike,
}: Props) => {
  const { data } = useMemberInfoQuery();

  const [isLiked, setIsLiked] = useState<boolean>(like);

  const onClick = () => {
    if (!data) {
      alert("로그인이 필요합니다!");
      return;
    }
    if (String(data.id) == writerId) {
      alert("본인이 작성한 글에 대해서는 좋아요가 불가능합니다!");
      return;
    }

    if (isLiked) {
      handleUnlike(id);
    } else {
      handleLike(id);
    }
    setIsLiked(!isLiked);
  };

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
