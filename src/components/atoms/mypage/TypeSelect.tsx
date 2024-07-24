import styled from "styled-components";
import color from "../../../styles/color";
interface TypeSelectProps {
  value: "DAILY" | "WEEKLY" | "MONTHLY";
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TypeSelect = ({ value, onChange }: TypeSelectProps) => {
  const options = [
    { value: "DAILY", label: "일별" },
    { value: "WEEKLY", label: "주별" },
    { value: "MONTHLY", label: "월별" },
  ];

  return (
    <Select value={value} onChange={onChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default TypeSelect;

const Select = styled.select`
  border: 1px solid ${color.COLOR_DARKGRAY_TEXT};
  border-radius: 5px;
  padding: 0.2rem;
  &:focus {
    outline: none;
  }
`;
