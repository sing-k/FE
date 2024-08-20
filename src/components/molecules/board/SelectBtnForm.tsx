import styled from "styled-components";

import color from "../../../styles/color";

import {
  // ControllerRenderProps,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

interface Item {
  [key: string]: string;
}

type Props = {
  name: string;
  label: string;
  items: Item;
  field: any;
  register: UseFormRegister<FieldValues>;
};

const SelectBtnForm = ({ name, register, label, items, field }: Props) => {
  const { onChange, value } = field;

  return (
    <Container>
      <Label>{label}</Label>

      <input type="hidden" {...register(name, { required: true })} />

      <ItemWrapper>
        {Object.keys(items).map((itemKey, idx) => (
          <Item
            key={`${itemKey}${idx}`}
            className={value === itemKey ? "selected" : "none"}
            onClick={() => onChange(itemKey)}
          >
            {items[itemKey]}
          </Item>
        ))}
      </ItemWrapper>
    </Container>
  );
};

export default SelectBtnForm;

const Container = styled.div`
  width: 100%;
  // background-color: orange;
  display: flex;
  align-items: center;
`;

const Label = styled.p`
  color: ${color.COLOR_GRAY_TEXT};
  font-weight: 600;
  width: 5rem;
`;

const ItemWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
`;

const Item = styled.div`
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;
  background-color: white;
  border: 1px solid ${color.COLOR_MAIN};
  color: ${color.COLOR_GRAY_TEXT};
  cursor: pointer;
  font-weight: 600;

  &.selected {
    background-color: ${color.COLOR_MAIN};
    color: white;
  }
`;
