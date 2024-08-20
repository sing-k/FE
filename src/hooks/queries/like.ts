import { useMutation, useQueryClient } from "@tanstack/react-query";

import { likeRecommendPost, likeFreePost } from "../../api/like";

export type LikeMutationArgs = {
  id: string;
  isLike: boolean;
};

export const useLikeRecommendPost = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likeRecommendPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["recommendPost", String(id)],
        refetchType: "active",
      });
    },
  });
};

export const useLikeFreePost = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likeFreePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["freePost", String(id)],
        refetchType: "active",
      });
    },
  });
};
