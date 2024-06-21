import React, { ChangeEvent, SetStateAction } from "react";

import styled from "styled-components";

import color from "../../../styles/color";

import { FaLink } from "react-icons/fa";

type Props = {
  input: string;
  setInput: React.Dispatch<SetStateAction<string>>;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const LinkInput = ({ input, setInput, handleChange, placeholder }: Props) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);

    if (handleChange) {
      handleChange(e);
    }
  };

  return (
    <Container>
      <FaLink color={color.COLOR_GRAY_TEXT} />

      <Input
        type="url"
        placeholder={placeholder}
        value={input}
        onChange={onChange}
      />
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
