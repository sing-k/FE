import { useState } from "react";
import styled from "styled-components";
import { useActivityHistoryGraphQuery } from "../../../hooks/queries/user";
import MyActivityGraph from "../../molecules/mypage/MyActivityGraph";
import { DateInput, TypeSelect } from "../../atoms";
import Loading from "../../common/Loading";
import { getDefaultDates } from "../../../utils/date";
import ErrorMessage from "../../common/ErrorMessage";
import color from "../../../styles/color";
const ActivityHistoryGraph = () => {
  const { startDate, endDate } = getDefaultDates();
  const [startDay, setStartDay] = useState<string>(`${startDate}`);
  const [endDay, setEndDay] = useState<string>(`${endDate}`);
  const [type, setType] = useState<"DAILY" | "WEEKLY" | "MONTHLY">("DAILY");

  const { data, isLoading, error } = useActivityHistoryGraphQuery(
    startDay,
    endDay,
    type,
  );

  return (
    <Container>
      <ColumnDiv>
        <Title>활동 그래프</Title>
        <InputContainer>
          <DateInput
            label="조회"
            value={startDay}
            onChange={e => setStartDay(e.target.value)}
            max={endDate}
          />
          <DateInput
            label="~"
            value={endDay}
            onChange={e => setEndDay(e.target.value)}
            max={endDate}
            min={startDay}
          />
          <TypeSelect
            value={type}
            onChange={e =>
              setType(e.target.value as "DAILY" | "WEEKLY" | "MONTHLY")
            }
          />
        </InputContainer>
      </ColumnDiv>
      <div>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <ErrorMessage />
        ) : data ? (
          <MyActivityGraph graph={data} />
        ) : (
          <ErrorMessage />
        )}
      </div>
    </Container>
  );
};

export default ActivityHistoryGraph;

const Title = styled.div`
  font-size: 1rem;
  text-align: center;
  font-weight: 700;
  white-space: nowrap;
  color: white;
  text-shadow: 1px 1px 1px ${color.COLOR_DARKGRAY_TEXT};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid ${color.COLOR_DARKGRAY_TEXT};
  overflow-x: scroll;
`;
const ColumnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${color.COLOR_DARKGRAY_TEXT};
  background-color: ${color.COLOR_MAIN_SKYBLUE};
  border-radius: 5px 5px 0 0;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`;
