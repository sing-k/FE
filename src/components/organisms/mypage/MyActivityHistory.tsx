import styled from "styled-components";
import ActivityHistoryGraph from "./ActivityHistoryGraph";
import ActivityHistoryList from "./ActivityHistoryList";

const MyActivityHistory = () => {
  return (
    <Container>
      <ActivityHistoryGraph />
      <ActivityHistoryList />
    </Container>
  );
};

export default MyActivityHistory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border-radius: 5px;
`;
