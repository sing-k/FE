import { AlbumReviewStatisticType } from "../../../types/albumReviewStatisticType";

import DashboardBox from "../../templates/albumDetail/DashboardBox";
import EachScorePercentage from "./EachScorePercentage";

type Props = {
  data: AlbumReviewStatisticType;
};

const AlbumScorePercentage = ({ data }: Props) => {
  return (
    <DashboardBox text="점수별 비율">
      {data.scoreStatistics
        .slice()
        .reverse()
        .map((data) => (
          <EachScorePercentage
            key={`${data.score}${data.ratio}`}
            score={data.score}
            percentage={data.ratio}
          />
        ))}
    </DashboardBox>
  );
};

export default AlbumScorePercentage;
