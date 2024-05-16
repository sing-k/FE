import styled from "styled-components";

import { AuthLabel, AuthCalendar, AuthRequiredText } from "../../atoms";

const BirthForm = () => {
  return (
    <Container>
      <div>
        <AuthLabel text="생년월일" />
        <AuthRequiredText />
      </div>
      <AuthCalendar />
    </Container>
  );
};

export default BirthForm;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 3%;
  > div {
    padding: 1%;
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;
