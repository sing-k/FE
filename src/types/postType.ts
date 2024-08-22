import { FreePostType } from "./freePostType";
import { RecommendType, RecommendGenreType } from "./recommendPostType";

export type LikeType = {
  count: number;
  like: boolean;
};

export type WriterType = {
  id: string | number;
  imageUrl: null | string;
  nickname: string;
};

export type PostType = "free" | "recommend";

export interface GeneralPostType extends FreePostType {
  recommend?: RecommendType;
  genre?: RecommendGenreType;
  link?: string;
}

export const postFilterType = {
  TITLE: "제목",
  CONTENT: "내용",
  WRITER: "글쓴이",
} as const;

export type PostFilterType = keyof typeof postFilterType;

export type SearchPostContext = {
  sort?: "LATEST";
  filter?: PostFilterType;
  keyword?: string;
};
