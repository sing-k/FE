import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";

import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

import { useVoteMutation } from "../../../hooks/queries/vote";

import { VoteType } from "../../../api/vote";

interface Props {
  albumId: string;
  reviewId: string;
  pros: number;
  cons: number;
}

interface BtnProps {
  type: VoteType;
  count: number;
  albumId: string;
  reviewId: string;
}

const AlbumVotingBtn = ({ type, count, albumId, reviewId }: BtnProps) => {
  const voteMutation = useVoteMutation(albumId);

  const onClick = async () => {
    voteMutation.mutate({ type, reviewId });
  };

  return (
    <Btn onClick={onClick}>
      {type === "PROS" ? <FaRegThumbsUp /> : <FaRegThumbsDown />}
      {count}
    </Btn>
  );
};

const AlbumVotingBtns = ({ albumId, reviewId, pros, cons }: Props) => {
  return (
    <Container>
      <AlbumVotingBtn
        albumId={albumId}
        reviewId={reviewId}
        count={pros}
        type="PROS"
      />

      <AlbumVotingBtn
        albumId={albumId}
        reviewId={reviewId}
        count={cons}
        type="CONS"
      />
    </Container>
  );
};

export default AlbumVotingBtns;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
`;

const Btn = styled.div`
  ${glassEffectStyle()}
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
