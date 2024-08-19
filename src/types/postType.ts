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
