import React from "react";

import styled from "styled-components";

import color from "../../../styles/color";

import {
  ControllerRenderProps,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

type Props = {
  name: string;
  label: string;
  items: string[];
  field: ControllerRenderProps;
  register: UseFormRegister<FieldValues>;
};

const SelectBtnForm = ({ name, register, label, items, field }: Props) => {
  const { onChange, value } = field;

  return (
    <Container>
      <Label>{label}</Label>

      <input type="hidden" {...register(name, { required: true })} />

      <ItemWrapper>
        {items.map((item, idx) => (
          <Item
            key={`${item}${idx}`}
            className={value === item ? "selected" : "none"}
            onClick={() => onChange(item)}
          >
            {item}
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
