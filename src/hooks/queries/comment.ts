import {
  useMutation,
  useQuery,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";

import {
  deleteFreePostComment,
  deleteRecommendPostComment,
  getFreePostComments,
  getRecommendPostComments,
  postFreeComment,
  postRecommendComment,
  updateFreePostComment,
  updateRecommendPostComment,
  getMyComments,
  COMMENT_LIST_LIMIT,
} from "../../api/comment";
import { FilterKey } from "../../components/organisms/mypage/MyComment";
import { MyCommentType, CommentPageParam } from "../../types/commentType";
export const useFreePostCommentsQuery = (postId: string) => {
  return useQuery({
    queryKey: ["freePostComments", String(postId)],
    queryFn: getFreePostComments,
    enabled: !!postId,
  });
};

export const useRecommendPostCommentsQuery = (postId: string) => {
  return useQuery({
    queryKey: ["recommendPostComments", String(postId)],
    queryFn: getRecommendPostComments,
    enabled: !!postId,
  });
};

export const useFreeCommentMutation = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postFreeComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["freePostComments", String(postId)],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["infiniteFreePostList"],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["freePost", String(postId)],
        refetchType: "all",
      });
    },
  });
};

export const useRecommendCommentMutation = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postRecommendComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["recommendPostComments", String(postId)],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["infiniteRecommendPostList"],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["recommendPost", String(postId)],
        refetchType: "all",
      });
    },
  });
};

export const useUpdateFreeCommentMutation = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateFreePostComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["freePostComments", String(postId)],
        refetchType: "all",
      });
    },
  });
};

export const useUpdateRecommendCommentMutation = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateRecommendPostComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["recommendPostComments", String(postId)],
        refetchType: "all",
      });
    },
  });
};

export const useDeleteFreeCommentMutation = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFreePostComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["freePostComments", String(postId)],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["infiniteFreePostList"],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["freePost", String(postId)],
        refetchType: "all",
      });
    },
  });
};

export const useDeleteRecommendCommentMutation = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteRecommendPostComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["recommendPostComments", String(postId)],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["infiniteRecommendPostList"],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["recommendPost", String(postId)],
        refetchType: "all",
      });
    },
  });
};

export const useInfiniteMyCommentsQuery = (filter: FilterKey) => {
  return useInfiniteQuery({
    queryKey: ["myComments", filter],
    queryFn: getMyComments,
    initialPageParam: { offset: 0 },
    getNextPageParam: (
      lastPage: MyCommentType[],
      _: MyCommentType[][],
      lastPageParam: CommentPageParam,
    ) => {
      if (lastPage.length < COMMENT_LIST_LIMIT) {
        return undefined;
      }

      return {
        offset: lastPageParam.offset + COMMENT_LIST_LIMIT,
      };
    },
  });
};
