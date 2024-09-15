import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
} from "../../api/comment";
import { FilterKey } from "../../components/organisms/mypage/MyComment";

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

export const useMyCommentsQuery = (filter: FilterKey) => {
  return useQuery({
    queryKey: [`myComments${filter}`, filter],
    queryFn: getMyComments,
  });
};
