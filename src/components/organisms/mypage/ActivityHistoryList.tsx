import { useState } from "react";
import styled from "styled-components";
import color from "../../../styles/color";
import { useActivityListQuery } from "../../../hooks/queries/user";
import { ListType } from "../../../types/activityHistoryType";
import { Pagination } from "../../common";
import { MyActivityList } from "../../molecules";
import { glassEffectStyle } from "../../../styles/style";

const ActivityHistoryList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const limit = 10;

  const offset = currentPage * limit;
  const { data, isLoading, isError } = useActivityListQuery(offset, limit);

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>오류가 발생했습니다.</div>;

  const activities: ListType[] = data?.items || [];
  const totalCount: number = data?.total || 0;
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <Container>
      <Title>활동 히스토리</Title>
      <ActivityContainer>
        {activities.map((activity, index) => (
          <MyActivityList key={index} activity={activity} />
        ))}
      </ActivityContainer>
      <Div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Div>
    </Container>
  );
};

export default ActivityHistoryList;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid ${color.COLOR_DARKGRAY_TEXT};
`;
const ActivityContainer = styled.div`
  ${glassEffectStyle()};
  padding: 1rem;
`;
const Title = styled.div`
  font-size: 1rem;
  text-align: center;
  font-weight: 700;
  white-space: nowrap;
  color: white;
  text-shadow: 1px 1px 1px ${color.COLOR_DARKGRAY_TEXT};
  padding: 1rem;
  border-bottom: 1px solid ${color.COLOR_DARKGRAY_TEXT};
  background-color: ${color.COLOR_MAIN_SKYBLUE};
  border-radius: 5px 5px 0 0;
  text-align: start;
`;
const Div = styled.div`
  ${glassEffectStyle()};
`;
