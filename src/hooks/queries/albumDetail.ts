import { useQuery } from "@tanstack/react-query";

import {
  getAlbumDetail,
  getAlbumReviewStatistic,
  getAlbumReviewList,
  AlbumReviewListArgs,
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
