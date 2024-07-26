import client from "../config/axios";

export const getAlbumDetail = async (albumId: string) => {
  const res = await client.get(`/api/albums/${albumId}`);

  if (res.status === 200) {
    return res.data.data;
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

export type AlbumReviewArgs = {
  albumId: string;
  content: string;
  score: number;
};

export const postAlbumReivew = async ({
  albumId,
  content,
  score,
}: AlbumReviewArgs): Promise<boolean> => {
  try {
    const res = await client.post(`/api/reviews/albums/${albumId}`, {
      content,
      score,
    });

    if (res.data.statusCode !== 200) {
      throw new Error();
    }

    return true;
  } catch (_) {
    return false;
  }
};
