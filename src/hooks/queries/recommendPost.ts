import { useInfiniteQuery } from "@tanstack/react-query";

import { getRecommendPostList } from "../../api/recommendPost";
import {
  RECOMMEND_POST_LIMIT,
  RecommendPostPageParam,
  RecommendPostType,
} from "../../types/recommendPostType";

export const useInfiniteRecommendPostListQuery = () => {
  return useInfiniteQuery({
    queryKey: ["infiniteRecommendPostList"],
    queryFn: getRecommendPostList,
    initialPageParam: { offset: 0 } as RecommendPostPageParam,
    getNextPageParam: (
      lastPage: RecommendPostType[],
      _: RecommendPostType[][],
      lastPageParam: RecommendPostPageParam
    ) => {
      if (lastPage.length < RECOMMEND_POST_LIMIT) {
        return undefined;
      }

      const nextPageParam: RecommendPostPageParam = {
        offset: lastPageParam.offset + lastPage.length,
      };

      return nextPageParam;
    },
  });
};
