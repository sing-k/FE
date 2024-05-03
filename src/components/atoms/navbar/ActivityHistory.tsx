import styled from "styled-components";

import { FaHistory } from "react-icons/fa";

const ActivityHistory = () => {
  return (
    <Container>
      <ActivityHistoryButton>
        <FaHistory size="0.7rem" />
        활동 히스토리
      </ActivityHistoryButton>
    </Container>
  );
};

export default ActivityHistory;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActivityHistoryButton = styled.button`
  width: 85%;
  font-size: 0.7rem;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
  background-color: transparent;
  color: #7d7d7d;

  &:hover {
    background-color: #ffffffc2;
  }
`;
