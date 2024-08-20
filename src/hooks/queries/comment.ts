import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  getFreePostComments,
  getRecommendPostComments,
  postFreeComment,
  postRecommendComment,
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
