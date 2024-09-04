import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  deleteRecommendPost,
  getRecommendPost,
  getRecommendPostList,
  postRecommendPost,
  updateRecommendPost,
  getMyRecommendPost,
  POST_LIST_LIMIT,
  getHomeRecommendPostList,
} from "../../api/recommendPost";
import {
  RECOMMEND_POST_LIMIT,
  RecommendPostPageParam,
  RecommendPostType,
} from "../../types/recommendPostType";
import { SearchPostContext } from "../../types/postType";

export const useHomeRecommendPostListQuery = () => {
  return useQuery({
    queryKey: ["homeRecommendPostList"],
    queryFn: getHomeRecommendPostList,
  });
};

export const useInfiniteRecommendPostListQuery = (ctx: SearchPostContext) => {
  return useInfiniteQuery({
    queryKey: ["infiniteRecommendPostList", ctx],
    queryFn: getRecommendPostList,
    initialPageParam: { offset: 0 } as RecommendPostPageParam,
    getNextPageParam: (
      lastPage: RecommendPostType[],
      _: RecommendPostType[][],
      lastPageParam: RecommendPostPageParam,
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

export const useDeleteRecommendPostMutation = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteRecommendPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["infiniteRecommendPostList"],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["recommendPost", postId],
        refetchType: "none",
      });
    },
  });
};

export const useInfiniteMyRecommendPostsQuery = () => {
  return useInfiniteQuery({
    queryKey: ["myRecommendPosts"],
    queryFn: getMyRecommendPost,
    initialPageParam: { offset: 0 },
    getNextPageParam: (
      lastPage: RecommendPostType[],
      _: RecommendPostType[][],
      lastPageParam: { offset: number },
    ) => {
      if (lastPage.length < POST_LIST_LIMIT) {
        return undefined;
      }

      return {
        offset: lastPage.length + lastPageParam.offset,
      };
    },
  });
};
