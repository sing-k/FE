import { useMemo } from "react";

import styled from "styled-components";
import color from "../../../styles/color";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

import { useMediaQueries } from "../../../hooks";

import DashboardBox from "../../templates/albumDetail/DashboardBox";

Chart.register(ArcElement, Tooltip, Legend);

const AlbumGenderPercentage = () => {
  const { isMobile } = useMediaQueries();
  const data = useMemo(
    () => ({
      labels: ["여성", "남성"],
      datasets: [
        {
          label: "# of Percentages",
          data: [43, 57],
          backgroundColor: [color.COLOR_FEMALE, color.COLOR_MALE],
          borderColor: ["#ffffff", "#ffffff"],
          borderWidth: 1,
        },
      ],
    }),
    []
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
      <Container id="container" style={{ width: isMobile ? "40%" : "80%" }}>
        <Doughnut
          data={data}
          options={options}
          width={"100%"}
          height={"100%"}
        />

        {/* 도넛 차트의 가운데 */}
        <CenterDiv>
          <CenterText className="male">남성 57%</CenterText>
          <CenterText className="female">여성 43%</CenterText>
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
  justify-content: space-between;
`;

const CenterText = styled.p`
  width: 48%;
  font-size: 0.8rem;
  //   background-color: aqua;
  text-align: center;
  font-weight: bold;

  &.male {
    color: ${color.COLOR_MALE};
  }

  &.female {
    color: ${color.COLOR_FEMALE};
  }
`;
