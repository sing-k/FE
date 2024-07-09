import client from "../config/axios";
import { AlbumType } from "../types/albumType";
import { QueryFunctionContext } from "@tanstack/react-query";

export const ALBUM_LIST_LIMIT = 10;

interface QueryDataType {
  [key: string]: {
    endPoint: string;
    queryName: string;
  };
}

const queryData: QueryDataType = {
  recent: {
    endPoint: "recent",
    queryName: "cursor-date",
  },
  averageScore: {
    endPoint: "average-score",
    queryName: "cursor-score",
  },
  reviewCount: {
    endPoint: "review-count",
    queryName: "cursor-review-count",
  },
} as const;

export type AlbumRequestType = "recent" | "averageScore" | "reviewCount";

export type AlbumPageParam = {
  cursorId: string;
  cursorData: string;
};

export type GetAlbumListArgs = {
  cursorId?: string;
  cursorData?: string;
  albumType: AlbumRequestType;
};

// recent: cursor-id 마지막 데이터의 id | cursor-date 마지막 데이터의 modifiedAt
// averageScore: cursor-id 마지막 데이터의 id | cursor-score 마지막 데이터의 averageScore
// reviewCount: cursor-id 마지막 데이터의 id | cursor-review-count 마지막 데이터의 count

export const getAlbumList = async ({
  queryKey,
  pageParam,
}: QueryFunctionContext): Promise<AlbumType[]> => {
  if (
    queryKey.length < 2 ||
    !queryKey[1] ||
    typeof queryKey[1] !== "string" ||
    !Object.keys(queryData).includes(queryKey[1] as string)
  ) {
    throw new Error("get album list API error: 잘못된 쿼리 파라미터");
  }

  const albumType: string = queryKey[1] as string;
  const endPoint = queryData[albumType].endPoint;
  const queryName = queryData[albumType].queryName;

  try {
    let url = `/api/albums/list/${endPoint}?limit=${ALBUM_LIST_LIMIT}`;

    if (pageParam) {
      const { cursorId, cursorData } = pageParam as AlbumPageParam;
      // console.log({ cursorId, cursorData });
      if (cursorId !== "" && cursorData !== "") {
        url += `&cursor-id=${cursorId}&${queryName}=${cursorData}`;
      }
    }

    const res = await client.get(url);

    if (res.data?.statusCode !== 200) return [];

    return res.data.data.items as AlbumType[];
  } catch (err) {
    throw new Error(`get album ${albumType} list error `);
  }
};
