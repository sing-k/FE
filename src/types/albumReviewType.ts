interface ReviewerType {
  id: string;
  imageUrl?: null | string;
  nickname?: null | string;
  gender: "남성" | "여성" | string;
}

export interface AlbumReviewType {
  id: string;
  content: string;
  score: number;
  pros: number;
  cons: number;
  createdAt: string;
  reviewer: ReviewerType;
}
