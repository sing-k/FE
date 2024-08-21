import { checkAPIResponseValidation } from ".";
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

    if (res.data.statusCode === 400) {
      alert("이미 감상평을 작성한 앨범입니다.");
      return false;
    }

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export type DeleteAlbumReviewContext = {
  albumId: string;
  reviewId: string;
};

export const deleteAlbumReivew = async ({
  reviewId,
  albumId,
}: DeleteAlbumReviewContext): Promise<boolean> => {
  try {
    const res = await client.delete(
      `/api/reviews/${reviewId}/albums/${albumId}`
    );

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
