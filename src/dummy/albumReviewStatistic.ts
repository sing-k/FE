import { AlbumReviewStatisticType } from "../types/albumReviewStatisticType";

export const albumReviewStatisticDummy: AlbumReviewStatisticType = {
  count: 10,
  totalScore: 30,
  averageScore: 3,
  scoreStatistics: [
    {
      score: 1,
      count: 2,
      ratio: 20,
    },
    {
      score: 2,
      count: 2,
      ratio: 20,
    },
    {
      score: 3,
      count: 2,
      ratio: 20,
    },
    {
      score: 4,
      count: 2,
      ratio: 20,
    },
    {
      score: 5,
      count: 2,
      ratio: 20,
    },
  ],
  genderStatistics: [
    {
      gender: "남성",
      count: 7,
      totalScore: 21,
      ratio: 70,
      averageScore: 3,
    },
    {
      gender: "여성",
      count: 3,
      totalScore: 9,
      ratio: 30,
      averageScore: 3,
    },
  ],
};
