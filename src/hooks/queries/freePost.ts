import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";

import {
  getFreePostList,
  FREE_POST_LIMIT,
  getFreePost,
  postFreePost,
  updateFreePost,
  deleteFreePost,
  getMyFreePost,
} from "../../api/freePost";
import { FreePostPageParam, FreePostType } from "../../types/freePostType";
import { SearchPostContext } from "../../types/postType";

export const useInfiniteFreePostListQuery = (ctx: SearchPostContext) => {
  return useInfiniteQuery({
    queryKey: ["infiniteFreePostList", ctx],
    queryFn: getFreePostList,
    initialPageParam: { offset: 0 } as FreePostPageParam,
    getNextPageParam: (
      lastPage: FreePostType[],
      _: FreePostType[][],
      lastPageParam: FreePostPageParam,
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

export const useFreePostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postFreePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["infiniteFreePostList"],
        refetchType: "all",
      });
    },
  });
};

export const useUpdateFreePostMutation = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateFreePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["infiniteFreePostList"],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["freePost", postId],
        refetchType: "all",
      });
    },
  });
};

export const useDeleteFreePostMutation = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFreePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["infiniteFreePostList"],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["freePost", postId],
        refetchType: "none",
      });
    },
  });
};

export const useMyFreePostsQuery = (offset: number, limit: number) => {
  return useQuery({
    queryKey: ["myFreePosts", offset, limit],
    queryFn: () => getMyFreePost(offset, limit),
    placeholderData: keepPreviousData,
  });
};
