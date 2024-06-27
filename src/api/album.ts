import client from "../config/axios";

const LIMIT = 10;

const queryData = {
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

type AlbumType = keyof typeof queryData;

type Args = {
  cursorId?: string;
  cursorData?: string;
  albumType: AlbumType;
};

export const getAlbumList = async (args: Args) => {
  try {
    let url = `/api/albums/list/${queryData[args.albumType].endPoint}?limit=${LIMIT}`;

    if (args.cursorId && args.cursorData) {
      url += `&cursor-id=${args.cursorId}&${queryData[args.albumType].queryName}=${args.cursorData}`;
    }

    const res = await client.get(url);

    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    console.log(`get album ${args.albumType} list error: `, err);
  }
};
