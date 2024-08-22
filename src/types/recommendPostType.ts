import { FreePostType } from "./freePostType";

export const recommendType = {
  IMAGE: "이미지",
  ALBUM: "앨범",
  YOUTUBE: "유튜브",
} as const;

export const recommendGenreType = {
  BALLAD: "발라드",
  POP: "팝",
  HIPHOP: "힙합",
  RNB: "알앤비",
  CLASSIC: "클래식",
} as const;

export const RECOMMEND_POST_LIMIT = 10;

export type RecommendPostPageParam = {
  offset: number;
};

export type RecommendType = keyof typeof recommendType;

export type RecommendGenreType = keyof typeof recommendGenreType;

export interface RecommendPostType extends FreePostType {
  recommend: RecommendType;
  genre: RecommendGenreType;
  link: string;
}

export interface RecommendPostRequestType {
  title: string;
  content: string;
  type: RecommendType;
  genre: RecommendGenreType;
  link?: string;
  file?: File;
}
