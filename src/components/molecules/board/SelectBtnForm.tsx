import styled from "styled-components";

import {
  // ControllerRenderProps,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import SelectBtn from "../../atoms/recommendBoard/SelectBtn";
import SelectBtnLabel from "../../atoms/recommendBoard/SelectBtnLabel";

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
      <SelectBtnLabel label={label} />

      <input type="hidden" {...register(name, { required: true })} />

      <ItemWrapper>
        {Object.keys(items).map((itemKey, idx) => (
          <SelectBtn
            key={`${itemKey}${idx}`}
            className={value === itemKey ? "selected" : "none"}
            onClick={() => onChange(itemKey)}
            text={items[itemKey]}
          />
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

const ItemWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
`;
