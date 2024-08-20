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
} from "../../api/comment";

export const useFreePostCommentsQuery = (postId: string) => {
  return useQuery({
    queryKey: ["freePostComments", postId],
    queryFn: getFreePostComments,
    enabled: !!postId,
  });
};

export const useRecommendPostCommentsQuery = (postId: string) => {
  return useQuery({
    queryKey: ["recommendPostComments", postId],
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
        queryKey: ["freePostComments", postId],
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
        queryKey: ["recommendPostComments", postId],
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
        queryKey: ["freePostComments", postId],
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
        queryKey: ["recommendPostComments", postId],
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
        queryKey: ["freePostComments", postId],
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
        queryKey: ["recommendPostComments", postId],
      });
    },
  });
};
