import { RecommendType, RecommendGenreType } from "./recommendPostType";

// 게시글 작성 폼 필드 타입
export interface WritePostValues {
  title: string;
  content: string;
}

// 음악 추천 게시글 작성 폼 필드 타입
export interface WriteRecommendValues extends WritePostValues {
  genre: RecommendGenreType;
  type: RecommendType;
  albumLink?: string;
  youtubeLink?: string;
  selectedFile?: File;
}

export interface PreviewPostType {
  title?: string;
  content?: string;
  recommend?: RecommendType;
  genre?: RecommendGenreType;
  link?: string;
}
