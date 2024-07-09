import client from "../config/axios";

export const getAlbumDetail = async (albumId: string) => {
  try {
    const res = await client.get(`/api/albums/${albumId}`);

    if (res.status === 200) {
      if (res.data?.statusCode === 200) {
        return res.data.data;
      } else {
        return false;
      }
    }
  } catch (_) {
    throw new Error("getAlbumDetail Error");
  }
};

export const getAlbumReviewStatistic = async (albumId: string) => {
  const res = await client.get(`/api/reviews/albums/${albumId}/statistics`);

  if (res.status === 200) {
    return res.data.data;
  }
};

export type AlbumReviewListArgs = {
  albumId: string;
  offset?: number;
  limit?: number;
  sort?: "NEW" | "LIKES";
};

export const getAlbumReviewList = async ({
  albumId,
  offset = 0,
  limit = 10,
  sort = "NEW",
}: AlbumReviewListArgs) => {
  const res = await client.get(
    `/api/reviews/albums/${albumId}?offset=${offset}&limit=${limit}&sort=${sort}`
  );

  if (res.status === 200) {
    return res.data.data;
  }
};
