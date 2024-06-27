import client from "../config/axios";

export const getAlbumDetail = async (albumId: string) => {
  const res = await client.get(`/api/albums/${albumId}`);

  if (res.status === 200) {
    return res.data.data;
  }
};
