import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import {
  getAlbumList,
  AlbumRequestType,
  AlbumPageParam,
  ALBUM_LIST_LIMIT,
} from "../../api/album";
import { AlbumType } from "../../types/albumType";

export const useAlbumListQuery = (albumType: AlbumRequestType) => {
  return useQuery({
    queryKey: ["albumList", albumType],
    queryFn: getAlbumList,
    enabled: !!albumType,
  });
};

export const useInfiniteAlbumListQuery = (albumType: AlbumRequestType) => {
  return useInfiniteQuery({
    queryKey: ["infiniteAlbumList", albumType],
    queryFn: getAlbumList,
    initialPageParam: { cursorId: "", cursorData: "" } as AlbumPageParam,
    getNextPageParam: (
      lastPage: AlbumType[], // 마지막 페이지의 데이터
      _: AlbumType[][], // allPages 모든 페이지들의 데이터
      lastPageParam: AlbumPageParam // 마지막 페이지의 파라미터
    ) => {
      // lastPage: 이전 페이지의 마지막 데이터
      if (lastPage.length < ALBUM_LIST_LIMIT) {
        return undefined;
      }

      const lastData = lastPage[lastPage.length - 1];
      const cursorId = lastData.id;
      const cursorData =
        albumType === "recent"
          ? lastData.modifiedAt
          : albumType === "averageScore"
            ? lastData.averageScore
            : albumType === "reviewCount"
              ? lastData.count
              : "";

      const nextPageParam = { cursorId, cursorData } as AlbumPageParam;

      if (lastPageParam.cursorId === nextPageParam.cursorId) {
        return undefined;
      }

      return nextPageParam;
    },
  });
};
