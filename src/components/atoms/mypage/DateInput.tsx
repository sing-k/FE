import styled from "styled-components";
import color from "../../../styles/color";
interface DateInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  max?: string;
  min?: string; // min 속성을 선택적으로 받도록 추가
}

const DateInput = ({ label, value, onChange, max, min }: DateInputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        type="date"
        value={value}
        onChange={onChange}
        max={max}
        min={min}
      />
    </Container>
  );
};

export default DateInput;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Label = styled.div`
  text-align: center;
  font-size: 0.8rem;
`;
const Input = styled.input`
  border: 1px solid ${color.COLOR_DARKGRAY_TEXT};
  padding: 0.2rem;
  font-size: 0.8rem;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;
