import styled, { css } from "styled-components";

import { glassEffectStyle } from "../../../styles/style";

import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

import { useVoteMutation } from "../../../hooks/queries/vote";

import { VoteDataType, VoteType } from "../../../types/voteType";
import color from "../../../styles/color";

type ClickVotingBtnContext = {
  type: VoteType;
  isVoted: boolean;
};

interface BtnProps {
  type: VoteType;
  count: number;
  isVoted: boolean;
  onClickVotingBtn: (ctx: ClickVotingBtnContext) => void;
}

interface Props {
  albumId: string;
  reviewId: string;
  vote: VoteDataType;
}

const AlbumVotingBtn = ({
  type,
  count,
  isVoted,
  onClickVotingBtn,
}: BtnProps) => {
  return (
    <Btn
      onClick={onClickVotingBtn.bind(this, { type, isVoted })}
      $isVoted={isVoted}
    >
      {type === "PROS" ? <FaRegThumbsUp /> : <FaRegThumbsDown />}

      {count}
    </Btn>
  );
};

const AlbumVotingBtns = ({ albumId, reviewId, vote }: Props) => {
  const voteMutation = useVoteMutation(albumId);

  const onClickVotingBtn = async ({ type, isVoted }: ClickVotingBtnContext) => {
    const otherType: VoteType = type === "PROS" ? "CONS" : "PROS";
    const isOtherVoted: boolean = type === "PROS" ? vote.cons : vote.pros;

    await voteMutation.mutateAsync({
      type,
      reviewId,
      isVoted,
      otherType,
      isOtherVoted,
    });
  };

  return (
    <Container>
      <AlbumVotingBtn
        count={vote.prosCount}
        isVoted={vote.pros}
        type="PROS"
        onClickVotingBtn={onClickVotingBtn}
      />

      <AlbumVotingBtn
        count={vote.consCount}
        isVoted={vote.cons}
        type="CONS"
        onClickVotingBtn={onClickVotingBtn}
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

const Btn = styled.div<{ $isVoted: boolean }>`
  ${glassEffectStyle()}
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  ${({ $isVoted }) => {
    if ($isVoted) {
      return css`
        background-color: ${color.COLOR_MAIN};
        color: white;
      `;
    }
  }}
`;
