import { Line } from "react-chartjs-2";
import color from "../../../styles/color";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ActivityDataType } from "../../../types/activityHistoryType";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

const MyActivityGraph = ({ graph }: { graph: ActivityDataType[] }) => {
  const data = {
    labels: graph.map(item => item.date),
    datasets: [
      {
        label: "포인트",
        data: graph.map(point => point.score),
        borderColor: `${color.COLOR_LINE_BLUE}`,
        backgroundColor: `${color.COLOR_LINE_BLUE}`,
        fill: false,
        pointBackgroundColor: `${color.COLOR_LINE_BLUE}`,
      },
    ],
  };

  const options = {
    responsive: true, //차트가 반응형으로 동작하게 부모 요소에 맞게
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "활동 그래프",
      },
      datalabels: {
        align: "start" as const,
        anchor: "start" as const,
        color: "black",
        formatter: function (value: number) {
          return value;
        },
        clip: false,
        font: {
          size: 10,
        },
      },
      layout: {
        padding: {
          top: 20, // 차트 상단에 여백을 추가하여 라벨이 더 잘 보이도록 설정
        },
      },
    },
  };

  return (
    <Container>
      <Line data={data} options={options} />
    </Container>
  );
};

export default MyActivityGraph;

const Container = styled.div`
  background-color: #ffffff7a;
  padding: 1rem;
`;
