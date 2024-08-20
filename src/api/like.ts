import client from "../config/axios";

import { checkAPIResponseValidation } from ".";

import { LikeMutationArgs } from "../hooks/queries/like";

export const likeFreePost = async ({
  id,
  isLike,
}: LikeMutationArgs): Promise<boolean> => {
  try {
    const method = isLike ? "delete" : "post";
    const res = await client({
      url: `/api/likes/posts/free/${id}`,
      method,
    });

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const likeRecommendPost = async ({
  id,
  isLike,
}: LikeMutationArgs): Promise<boolean> => {
  try {
    const method = isLike ? "delete" : "post";
    const res = await client({
      url: `/api/likes/posts/recommend/${id}`,
      method,
    });

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const likeFreeComment = async ({
  id,
  isLike,
}: LikeMutationArgs): Promise<boolean> => {
  try {
    const method = isLike ? "delete" : "post";
    const res = await client({
      url: `/api/likes/posts/free/comments/${id}`,
      method,
    });

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const likeRecommendComment = async ({
  id,
  isLike,
}: LikeMutationArgs): Promise<boolean> => {
  try {
    const method = isLike ? "delete" : "post";
    const res = await client({
      url: `/api/likes/posts/recommend/comments/${id}`,
      method,
    });

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
