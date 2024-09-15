import {
  useQuery,
  useQueryClient,
  useMutation,
  useInfiniteQuery,
} from "@tanstack/react-query";

import {
  getAlbumDetail,
  getAlbumReviewStatistic,
  getAlbumReviewList,
  AlbumReviewListArgs,
  postAlbumReivew,
  deleteAlbumReivew,
  getMyAlbumReviews,
  ALBUM_LIST_LIMIT,
} from "../../api/albumDetail";
import {
  AlbumReviewPageParam,
  AlbumReview,
} from "../../types/myAlbumReviewType";

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

export const useInfiniteMyAlbumReviewsQuery = () => {
  return useInfiniteQuery({
    queryKey: ["myAlbumReviews"],
    queryFn: getMyAlbumReviews,
    initialPageParam: { offset: 0 } as AlbumReviewPageParam,
    getNextPageParam: (
      lastPage: AlbumReview[],
      _: AlbumReview[][],
      lastPageParam: AlbumReviewPageParam,
    ) => {
      if (lastPage.length < ALBUM_LIST_LIMIT) {
        return undefined;
      }

      return {
        offset: lastPage.length + lastPageParam.offset,
      };
    },
  });
};
