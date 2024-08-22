import styled from "styled-components";

import color from "../../../styles/color";

type Props = {
  className?: "none" | "selected";
  onClick?: () => void;
  text: string;
};

const SelectBtn = ({ className = "none", onClick = () => {}, text }: Props) => {
  return (
    <Item className={className} onClick={onClick}>
      {text}
    </Item>
  );
};

export default SelectBtn;

const Item = styled.div`
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;
  background-color: white;
  border: 1px solid ${color.COLOR_MAIN};
  color: ${color.COLOR_GRAY_TEXT};
  cursor: pointer;
  font-weight: 600;
  width: max-content;

  &.selected {
    background-color: ${color.COLOR_MAIN};
    color: white;
  }
`;
