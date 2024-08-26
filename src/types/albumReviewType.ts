interface ReviewerStatisticsType {
  averageReviewScore: number;
  totalActivityScore: number;
  totalReview: number;
  totalReviewScore: number;
}

interface ReviewerType {
  id: string | number;
  imageUrl?: null | string;
  nickname?: null | string;
  gender: "남성" | "여성" | string;
  statistics: ReviewerStatisticsType;
}

export interface AlbumReviewType {
  id: string | number;
  content: string;
  score: number;
  pros: number;
  cons: number;
  createdAt: string;
  reviewer: ReviewerType;
}
