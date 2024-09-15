import { useState } from "react";
import styled from "styled-components";

type AuthCalendarProps = {
  onDateChange: (date: string) => void;
  register: any;
};

const AuthCalendar = ({ onDateChange, register }: AuthCalendarProps) => {
  const [startDate, setStartDate] = useState<string>(
    new Date().toISOString().split("T")[0],
  );

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    setStartDate(date);
    onDateChange(date);
  };

  const today = new Date().toISOString().split("T")[0];
  return (
    <Container>
      <StyledLabel>
        <StyledInput
          {...register}
          type="date"
          value={startDate}
          onChange={handleDateChange}
          max={today}
          onClick={e => e.currentTarget.showPicker()}
        />
      </StyledLabel>
    </Container>
  );
};

export default AuthCalendar;

const Container = styled.div`
  width: 100%;
`;
const StyledLabel = styled.label`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const StyledInput = styled.input`
  font-size: 0.8rem;
  border: 1px solid #aeaeae;
  border-radius: 8px;
  width: 100%;
  height: 20%;
  padding: 2.5%;
  margin: 2% 0 2% 0;
  text-align: center;
  &:focus {
    outline: none;
  }
`;
