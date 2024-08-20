import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  likeRecommendPost,
  likeFreePost,
  likeFreeComment,
  likeRecommendComment,
} from "../../api/like";

export type LikeMutationArgs = {
  id: string;
  isLike: boolean;
};

export const useLikeRecommendPost = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likeRecommendPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["recommendPost", String(postId)],
        refetchType: "active",
      });
    },
  });
};

export const useLikeFreePost = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likeFreePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["freePost", String(postId)],
        refetchType: "active",
      });
    },
  });
};

export const useLikeFreeComment = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likeFreeComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["freePost", String(postId)],
        refetchType: "active",
      });
      queryClient.invalidateQueries({
        queryKey: ["freePostComments", postId],
      });
    },
  });
};

export const useLikeRecommendComment = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likeRecommendComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["recommendPost", String(postId)],
        refetchType: "active",
      });
      queryClient.invalidateQueries({
        queryKey: ["recommendPostComments", postId],
      });
    },
  });
};
