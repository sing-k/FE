import DashboardBox from "../../templates/albumDetail/DashboardBox";
import EachScorePercentage from "./EachScorePercentage";

const dummy = [
  {
    score: 1,
    percentage: 0,
  },
  {
    score: 2,
    percentage: 0,
  },
  {
    score: 3,
    percentage: 0,
  },
  {
    score: 4,
    percentage: 23,
  },
  {
    score: 5,
    percentage: 77,
  },
];

const AlbumScorePercentage = () => {
  return (
    <DashboardBox text="점수별 비율">
      {dummy
        .slice()
        .reverse()
        .map((data) => (
          <EachScorePercentage
            key={`${data.score}${data.percentage}`}
            score={data.score}
            percentage={data.percentage}
          />
        ))}
    </DashboardBox>
  );
};

export default AlbumScorePercentage;
