interface ScoreStatisticType {
  score: number;
  count: number;
  ratio: number;
}

interface GenderStatisticType {
  gender: string;
  count: number;
  totalScore: number;
  ratio: number;
  averageScore: number;
}

export interface AlbumReviewStatisticType {
  count: number;
  totalScore: number;
  averageScore: number;
  scoreStatistics: ScoreStatisticType[];
  genderStatistics: GenderStatisticType[];
}
