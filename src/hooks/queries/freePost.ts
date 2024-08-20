import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import {
  getFreePostList,
  FREE_POST_LIMIT,
  getFreePost,
} from "../../api/freePost";
import { FreePostPageParam, FreePostType } from "../../types/freePostType";

export const useInfiniteFreePostListQuery = () => {
  return useInfiniteQuery({
    queryKey: ["infiniteFreePostList"],
    queryFn: getFreePostList,
    initialPageParam: { offset: 0 } as FreePostPageParam,
    getNextPageParam: (
      lastPage: FreePostType[],
      _: FreePostType[][],
      lastPageParam: FreePostPageParam
    ) => {
      if (lastPage.length < FREE_POST_LIMIT) {
        return undefined;
      }

      const nextPageParam: FreePostPageParam = {
        offset: lastPageParam.offset + lastPage.length,
      };

      return nextPageParam;
    },
  });
};

export const useFreePostQuery = (id: string) => {
  return useQuery({
    queryKey: ["freePost", id],
    queryFn: getFreePost,
    enabled: !!id,
  });
};
