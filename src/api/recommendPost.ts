import client from "../config/axios";

import { QueryFunctionContext } from "@tanstack/react-query";
import {
  RecommendPostType,
  RECOMMEND_POST_LIMIT,
  RecommendPostPageParam,
} from "../types/recommendPostType";

export const getRecommendPostList = async ({
  pageParam,
}: QueryFunctionContext): Promise<RecommendPostType[]> => {
  try {
    let url = `/api/posts/recommend?limit=${RECOMMEND_POST_LIMIT}`;

    if (pageParam) {
      const { offset, sort, filter, keyword } =
        pageParam as RecommendPostPageParam;

      url += `&offset=${offset}&sort=${sort ? sort : "LATEST"}`;

      if (filter && keyword) {
        url += `&filter=${filter}&keyword=${keyword}`;
      }
    }

    const res = await client.get(url);

    if (!String(res.data.statusCode).startsWith("2")) {
      throw new Error(res.data.message || "Recommend Post List Error");
    }

    return res.data.data.items as RecommendPostType[];
  } catch (err) {
    console.log(err);
    return [];
  }
};
