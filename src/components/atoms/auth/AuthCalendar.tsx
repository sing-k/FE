import { useState } from "react";

import DatePicker from "react-datepicker";

import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css"; // 수정된 부분

import { FaRegCalendarCheck } from "react-icons/fa";

import { convertTime } from "../../../utils/auth/convertTime";

type AuthCalendarProps = {
  onDateChange: (date: string) => void;
};
const AuthCalendar = ({ onDateChange }: AuthCalendarProps) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const handleDateChange = (date: Date) => {
    setStartDate(date);
    const formattedDate = convertTime(date).split("T")[0];
    onDateChange(formattedDate);
  };
  return (
    <Container>
      <StyledLabel>
        <DatePicker
          selected={startDate}
          dateFormat="yyyy-MM-dd"
          onChange={handleDateChange}
          customInput={<StyledInput />}
        />
        <FaRegCalendarCheck size="1.5rem" color="#6741ff" />
      </StyledLabel>
    </Container>
  );
};

export default AuthCalendar;

const Container = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }
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
  font-size: 0.8rem !important;
  border: 1px solid #aeaeae !important;
  border-radius: 8px !important;
  width: 90% !important;
  height: 20% !important;
  padding: 2.5% !important;
  margin: 2% 0 2% 0 !important;
  text-align: center;
  &:focus {
    outline: none;
  }
`;
