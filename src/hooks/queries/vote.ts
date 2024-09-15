import { useQueryClient, useMutation } from "@tanstack/react-query";

import { postVote, deleteVote, vote } from "../../api/vote";

export const usePostVoteMutation = (albumId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postVote,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["albumReviewList", { albumId }],
        refetchType: "active",
      });
    },
  });
};

export const useDeleteVoteMutation = (albumId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteVote,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["albumReviewList", { albumId }],
        refetchType: "active",
      });
    },
  });
};

export const useVoteMutation = (albumId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: vote,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["albumReviewList", { albumId }],
        refetchType: "active",
      });
    },
  });
};
