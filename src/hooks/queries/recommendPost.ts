import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getRecommendPost,
  getRecommendPostList,
  postRecommendPost,
  updateRecommendPost,
} from "../../api/recommendPost";
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

export const useRecommendPostQuery = (id: string) => {
  return useQuery({
    queryKey: ["recommendPost", id],
    queryFn: getRecommendPost,
    enabled: !!id,
  });
};

export const useRecommendPostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postRecommendPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["infiniteRecommendPostList"],
        refetchType: "all",
      });
    },
  });
};

export const useUpdateRecommendPostMutation = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateRecommendPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["infiniteRecommendPostList"],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["recommendPost", postId],
        refetchType: "all",
      });
    },
  });
};
