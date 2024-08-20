import client from "../config/axios";

import { checkAPIResponseValidation } from ".";

import { QueryFunctionContext } from "@tanstack/react-query";

import { CommentContext, CommentType } from "../types/commentType";

export const postFreeComment = async ({
  postId,
  parentId,
  content,
}: CommentContext): Promise<boolean> => {
  try {
    let url = `/api/posts/free/${postId}/comments`;

    if (parentId) url += `/${parentId}`;

    const res = await client.post(url, { content });

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const postRecommendComment = async ({
  postId,
  parentId,
  content,
}: CommentContext): Promise<boolean> => {
  try {
    let url = `/api/posts/recommend/${postId}/comments`;

    if (parentId) url += `/${parentId}`;

    const res = await client.post(url, { content });

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getFreePostComments = async ({
  queryKey,
}: QueryFunctionContext): Promise<CommentType[]> => {
  try {
    const postId = queryKey[1];

    const res = await client.get(`/api/posts/free/${postId}/comments`);

    checkAPIResponseValidation(res);

    return res.data.data as CommentType[];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getRecommendPostComments = async ({
  queryKey,
}: QueryFunctionContext): Promise<CommentType[]> => {
  try {
    const postId = queryKey[1];

    const res = await client.get(`/api/posts/recommend/${postId}/comments`);

    checkAPIResponseValidation(res);

    return res.data.data as CommentType[];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export type UpdateCommentContext = {
  commentId: string;
  content: string;
};

export const updateFreePostComment = async ({
  commentId,
  content,
}: UpdateCommentContext): Promise<boolean> => {
  try {
    const res = await client.put(`/api/posts/free/comments/${commentId}`, {
      content,
    });

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const updateRecommendPostComment = async ({
  commentId,
  content,
}: UpdateCommentContext): Promise<boolean> => {
  try {
    const res = await client.put(`/api/posts/recommend/comments/${commentId}`, {
      content,
    });

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const deleteFreePostComment = async (
  commentId: string
): Promise<boolean> => {
  try {
    const res = await client.delete(`/api/posts/free/comments/${commentId}`);

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const deleteRecommendPostComment = async (
  commentId: string
): Promise<boolean> => {
  try {
    const res = await client.delete(
      `/api/posts/recommend/comments/${commentId}`
    );

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};