import { useMemo } from "react";

import styled from "styled-components";
import color from "../../../styles/color";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

import { useMediaQueries } from "../../../hooks";

import DashboardBox from "../../templates/albumDetail/DashboardBox";

import { AlbumReviewStatisticType } from "../../../types/albumReviewStatisticType";

Chart.register(ArcElement, Tooltip, Legend);

type Props = {
  data: AlbumReviewStatisticType;
};

const AlbumGenderPercentage = ({ data }: Props) => {
  const { genderStatistics, count } = data;

  genderStatistics.sort((a, _) => (a.gender === "남성" ? 1 : -1));

  const { isMobile } = useMediaQueries();
  const doughnutData = useMemo(
    () =>
      count === 0
        ? {
            labels: ["통계 없음"],
            datasets: [
              {
                label: "통계 없음",
                data: [100],
                backgroundColor: [color.COLOR_LIGHTGRAY_BACKGROUND],
                borderColor: ["#ffffff"],
                borderWidth: 1,
              },
            ],
          }
        : {
            labels: genderStatistics.map((el) => el.gender),
            datasets: [
              {
                label: "# of Percentages",
                data: genderStatistics.map((el) => el.ratio),
                backgroundColor:
                  genderStatistics[0].ratio == 0
                    ? [color.COLOR_MALE]
                    : genderStatistics[1].ratio == 0
                      ? [color.COLOR_FEMALE]
                      : [color.COLOR_FEMALE, color.COLOR_MALE],
                borderColor: ["#ffffff", "#ffffff"],
                borderWidth: 1,
              },
            ],
          },
    [data]
  );

  const options = useMemo(
    () => ({
      cutout: "70%", // 가운데 빈 공간
      plugins: {
        legend: {
          display: false, // 라벨 숨기기
        },
      },
    }),
    []
  );

  return (
    <DashboardBox text="성별 비율">
      <Container id="container" style={{ width: isMobile ? "40%" : "70%" }}>
        <Doughnut
          data={doughnutData}
          options={options}
          width={"100%"}
          height={"100%"}
        />

        {/* 도넛 차트의 가운데 */}
        <CenterDiv>
          {count === 0 ? (
            <CenterText>통계 없음</CenterText>
          ) : (
            <>
              <CenterText className="male">
                남성 {genderStatistics[1].ratio}%
              </CenterText>
              <CenterText className="female">
                여성 {genderStatistics[0].ratio}%
              </CenterText>
            </>
          )}
        </CenterDiv>
      </Container>
    </DashboardBox>
  );
};

export default AlbumGenderPercentage;

const Container = styled.div`
  aspect-ratio: 1 / 1;
  position: relative;
`;

const CenterDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterText = styled.p`
  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
  flex: 1;
  color: ${color.COLOR_DARKGRAY_TEXT};

  &.male {
    color: ${color.COLOR_MALE};
  }

  &.female {
    color: ${color.COLOR_FEMALE};
  }
`;
