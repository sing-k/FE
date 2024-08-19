import { LikeType, WriterType } from "./postType";

export type FreePostPageParam = {
  offset: number;
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
