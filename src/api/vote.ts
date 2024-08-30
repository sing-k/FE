import { AxiosResponse } from "axios";
import { checkAPIResponseValidation } from ".";

import client from "../config/axios";

import { VoteType } from "../types/voteType";

interface VoteRequestContext {
  type: VoteType;
  reviewId: string;
}

interface VoteContext extends VoteRequestContext {
  isVoted: boolean;
  otherType: VoteType;
  isOtherVoted: boolean;
}

export const postVote = async ({
  type,
  reviewId,
}: VoteRequestContext): Promise<AxiosResponse> => {
  return await client.post(`/api/votes/albums/reviews/${reviewId}`, {
    type,
  });
};

export const deleteVote = async ({
  type,
  reviewId,
}: VoteRequestContext): Promise<AxiosResponse> => {
  return await client.delete(`/api/votes/albums/reviews/${reviewId}`, {
    data: { type },
  });
};

export const vote = async ({
  type,
  reviewId,
  isVoted,
  otherType,
  isOtherVoted,
}: VoteContext): Promise<boolean> => {
  try {
    if (isOtherVoted) {
      await deleteVote({ type: otherType, reviewId });
    }

    let res = isVoted
      ? await deleteVote({ type, reviewId })
      : await postVote({ type, reviewId });

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
