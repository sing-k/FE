import {
  useQuery,
  useQueryClient,
  useMutation,
  keepPreviousData,
} from "@tanstack/react-query";

import {
  getAlbumDetail,
  getAlbumReviewStatistic,
  getAlbumReviewList,
  AlbumReviewListArgs,
  postAlbumReivew,
  deleteAlbumReivew,
  getMyAlbumReviews,
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

export const usePostAlbumReview = (albumId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postAlbumReivew,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["album", albumId],
      });
      queryClient.invalidateQueries({
        queryKey: ["albumReviewStatistic", albumId],
      });
      queryClient.invalidateQueries({
        queryKey: ["albumReviewList", { albumId }],
      });
    },
    onError: errorMessage => {
      alert(errorMessage);
    },
  });
};

export const useDeleteAlbumReviewMutation = (albumId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAlbumReivew,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["album", albumId],
      });
      queryClient.invalidateQueries({
        queryKey: ["albumReviewStatistic", albumId],
      });
      queryClient.invalidateQueries({
        queryKey: ["albumReviewList", { albumId }],
      });
    },
    onError: errorMessage => {
      alert(errorMessage);
    },
  });
};

export const useMyAlbumReviewsQuery = (offset: number, limit: number) => {
  return useQuery({
    queryKey: ["myAlbumReviews", offset, limit],
    queryFn: () => getMyAlbumReviews(offset, limit),
    placeholderData: keepPreviousData,
  });
};
