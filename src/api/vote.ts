import { AxiosResponse } from "axios";
import { checkAPIResponseValidation } from ".";
import client from "../config/axios";

export type VoteType = "PROS" | "CONS";

type VoteContext = {
  type: VoteType;
  reviewId: string;
};

export const postVote = async ({
  type,
  reviewId,
}: VoteContext): Promise<AxiosResponse> => {
  return await client.post(`/api/votes/albums/reviews/${reviewId}`, {
    type,
  });
};

export const deleteVote = async ({
  type,
  reviewId,
}: VoteContext): Promise<AxiosResponse> => {
  return await client.delete(`/api/votes/albums/reviews/${reviewId}`, {
    data: { type },
  });
};

export const vote = async ({
  type,
  reviewId,
}: VoteContext): Promise<boolean> => {
  try {
    let res = await postVote({ type, reviewId });

    console.log("post: ", res.data);

    if (res.data?.statusCode === 400) {
      res = await deleteVote({ type, reviewId });
      console.log("delete: ", res.data);
    }

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
