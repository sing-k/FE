export type FreePostPageParam = {
  offset: number;
};

export type LikeType = {
  count: number;
  isLike: boolean;
};

export type WriterType = {
  id: string | number;
  imageUrl: null | string;
  nickname: string;
};

export interface FreePostType {
  id: string | number;
  content: string;
  title: string;
  like: LikeType;
  comments: number;
  writer: WriterType;
  createdAt: string;
  modifiedAt: string;
}
