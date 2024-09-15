import styled from "styled-components";
import color from "../../../styles/color";
import { ListType } from "../../../types/activityHistoryType";
import { useMediaQueries } from "../../../hooks";
interface MyActivityListProps {
  activity: ListType;
}

const formatScore = (score: number) => {
  return score >= 0 ? `+${score}` : `${score}`;
};
const MyActivityList = ({ activity }: MyActivityListProps) => {
  const { isMobile } = useMediaQueries();
  const isPositive = activity.score >= 0;
  return (
    <Container $isMobile={isMobile}>
      <ContentPoint>
        <Content>{activity.content}</Content>
        <Score $isPositive={isPositive}>{formatScore(activity.score)}</Score>
      </ContentPoint>
      <Date>{activity.date}</Date>
    </Container>
  );
};

export default MyActivityList;

const Container = styled.div<{ $isMobile: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: ${({ $isMobile }) => ($isMobile ? "start" : "center")};
  margin: 1rem;
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
`;
const ContentPoint = styled.div`
  display: flex;
  justify-content: start;
  width: 40%;
`;
const Content = styled.div`
  flex: 9;
  white-space: nowrap;
  text-align: start;
`;
const Score = styled.div<{ $isPositive: boolean }>`
  flex: 1;
  width: 20px;
  text-align: start;
  color: ${({ $isPositive }) => ($isPositive ? "red" : "blue")}; // 색상 설정
`;
const Date = styled.div`
  color: ${color.COLOR_GRAY_TEXT};
  text-align: start;
  font-size: 0.9rem;
  width: 10rem;
`;
