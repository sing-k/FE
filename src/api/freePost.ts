import client from "../config/axios";

import { QueryFunctionContext } from "@tanstack/react-query";
import { FreePostType, FreePostPageParam } from "../types/freePostType";
import { checkAPIResponseValidation } from ".";
import { SearchPostContext } from "../types/postType";

export const FREE_POST_LIMIT = 10;

export const getFreePostList = async ({
  queryKey,
  pageParam,
}: QueryFunctionContext): Promise<FreePostType[]> => {
  try {
    const ctx = queryKey[1] as SearchPostContext;
    const { sort, filter, keyword } = ctx;

    let url = `/api/posts/free?limit=${FREE_POST_LIMIT}`;

    if (pageParam) {
      const { offset } = pageParam as FreePostPageParam;

      url += `&offset=${offset}`;

      url += `&sort=${sort ? sort : "LATEST"}`;

      if (filter && keyword) {
        url += `&filter=${filter}&keyword=${keyword}`;
      }
    }

    const res = await client.get(url);

    if (res.data.statusCode !== 200) {
      throw new Error(res.data.message || "Free Post List Error");
    }

    return res.data.data.items as FreePostType[];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getFreePost = async ({
  queryKey,
}: QueryFunctionContext): Promise<FreePostType | undefined> => {
  try {
    const id = queryKey[1];

    const res = await client.get(`/api/posts/free/${id}`);

    if (res.data.statusCode !== 200) {
      throw new Error(res.data.message || "Free Post Error");
    }

    return res.data.data as FreePostType;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

type PostFreePostContext = {
  title: string;
  content: string;
};

export const postFreePost = async ({
  title,
  content,
}: PostFreePostContext): Promise<boolean> => {
  try {
    const res = await client.post(`/api/posts/free`, {
      title,
      content,
    });

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

type UpdateFreePostContext = {
  postId: string;
  title: string;
  content: string;
};

export const updateFreePost = async ({
  postId,
  title,
  content,
}: UpdateFreePostContext): Promise<boolean> => {
  try {
    const res = await client.put(`/api/posts/free/${postId}`, {
      title,
      content,
    });

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const deleteFreePost = async (postId: string): Promise<boolean> => {
  try {
    const res = await client.delete(`/api/posts/free/${postId}`);

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getMyFreePost = async (offset: number, limit: number) => {
  try {
    const res = await client.get("/api/posts/free/me", {
      params: {
        offset,
        limit,
        sort: "LATEST",
      },
    });

    if (res.data.statusCode !== 200) {
      throw new Error(res.data.message || "Failed to fetch posts");
    }

    return res.data.data;
  } catch (error) {
    console.error("Error fetching my free posts:", error);
    throw error;
  }
};
