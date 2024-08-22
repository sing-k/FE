import styled from "styled-components";

import color from "../../../styles/color";

type Props = {
  label: string;
};

const SelectBtnLabel = ({ label }: Props) => {
  return <Label>{label}</Label>;
};

export default SelectBtnLabel;

const Label = styled.p`
  color: ${color.COLOR_GRAY_TEXT};
  font-weight: 600;
  width: 5rem;
`;
