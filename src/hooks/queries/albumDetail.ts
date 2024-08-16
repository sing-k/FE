import {
  useQuery,
  useQueryClient,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";

import {
  getAlbumDetail,
  getAlbumReviewStatistic,
  getAlbumReviewList,
  AlbumReviewListArgs,
  postAlbumReivew,
  AlbumReviewArgs,
} from "../../api/albumDetail";

export const useAlbumDetailQuery = (albumId: string) => {
  return useQuery({
    queryKey: ["album", albumId],
    queryFn: () => getAlbumDetail(albumId),
    enabled: !!albumId,
  });
};

export const useAlbumReviewStatisticQuery = (albumId: string) => {
  return useQuery({
    queryKey: ["albumReviewStatistic", albumId],
    queryFn: () => getAlbumReviewStatistic(albumId),
    enabled: !!albumId,
  });
};

export const useAlbumReviewListQuery = (args: AlbumReviewListArgs) => {
  return useQuery({
    queryKey: ["albumReviewList", args],
    queryFn: () => getAlbumReviewList(args),
    enabled: !!args.albumId,
  });
};

export const usePostAlbumReview = (
  albumId: string
): UseMutationResult<unknown, unknown, AlbumReviewArgs, unknown> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postAlbumReivew,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["albumReviewList", { albumId }],
      });
      alert("감상평이 등록되었습니다.");
    },
    onError: (errorMessage) => {
      alert(errorMessage);
    },
  });
};
