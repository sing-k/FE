export type FreePostPageParam = {
  offset: number;
};

export type LikeType = {
  count: number;
  like: boolean;
};

export type WriterType = {
  id: string | number;
  imageUrl: null | string;
  nickname: string;
};

export type FreePostType = {
  id: string | number;
  title: string;
  like: LikeType;
  comments: number;
  writer: WriterType;
  createdAt: string;
};
