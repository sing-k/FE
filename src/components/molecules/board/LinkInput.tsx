import { UseFormRegister, FieldValues } from "react-hook-form";

import styled from "styled-components";

import color from "../../../styles/color";

import { FaLink } from "react-icons/fa";

type Props = {
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  name: string;
};

const LinkInput = ({ placeholder, register, name }: Props) => {
  return (
    <Container>
      <FaLink color={color.COLOR_GRAY_TEXT} />

      <Input type="url" placeholder={placeholder} {...register(name)} />
    </Container>
  );
};

export default LinkInput;

const Container = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid ${color.COLOR_LIGHTGRAY_BORDER};

  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
`;

const Input = styled.input`
  display: inline-block;
  flex: 1;
  border: none;
  outline: none;
`;
