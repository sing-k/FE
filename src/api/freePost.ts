import client from "../config/axios";

import { QueryFunctionContext } from "@tanstack/react-query";
import { FreePostType, FreePostPageParam } from "../types/freePostType";

export const FREE_POST_LIMIT = 10;

export const getFreePostList = async ({
  pageParam,
}: QueryFunctionContext): Promise<FreePostType[]> => {
  try {
    let url = `/api/posts/free?limit=${FREE_POST_LIMIT}&sort=LATEST`;

    if (pageParam) {
      const { offset } = pageParam as FreePostPageParam;

      url += `&offset=${offset}`;
    }

    const res = await client.get(url);

    if (res.data.statusCode !== 200) {
      throw new Error(res.data.message || "Album List Error");
    }

    return res.data.data.items as FreePostType[];
  } catch (err) {
    console.log(err);
    return [];
  }
};