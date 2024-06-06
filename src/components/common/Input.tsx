import React, { ChangeEvent } from "react";

import styled from "styled-components";
import color from "../../styles/color";

type InputButtonType = {
  icon?: React.ReactNode;
  text?: string;
  onClickButton?: () => void;
};

type Props = {
  input: any;
  setInput: React.Dispatch<React.SetStateAction<any>>;
  type?: React.HTMLInputTypeAttribute;
  button?: InputButtonType;
  placeholder?: string;
  width?: string;
};

const Input = ({
  input,
  setInput,
  type,
  button,
  placeholder,
  width,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <Container style={width ? { width } : {}}>
      <BorderBox>
        <InputWrapper>
          <StyledInput
            type={type ? type : "text"}
            value={input}
            onChange={handleChange}
            placeholder={placeholder}
          />

          {button?.icon && <IconBtn>{button.icon}</IconBtn>}
        </InputWrapper>
      </BorderBox>

      {button?.text && <TextBtn>{button.text}</TextBtn>}
    </Container>
  );
};

export default Input;

const Container = styled.div`
  width: 100%;
  min-width: max-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BorderBox = styled.div`
  flex-grow: 1;
  border-radius: 50px;
  border: 3px double #eeeeeeb1;
  box-shadow: 0px 0px 16px #eeeeee6e;
`;

const InputWrapper = styled.div`
  width: 100%;
  border-radius: inherit;
  display: flex;
  align-items: center;
  background-color: white;
  gap: 0.5rem;
  padding: 0.3rem 0.6rem;
`;

const StyledInput = styled.input`
  display: inline-block;
  border: none;
  flex-grow: 1;
  &:focus {
    outline: none;
  }
`;

const IconBtn = styled.div`
  cursor: pointer;
  flex-grow: 0;
  color: ${color.COLOR_GRAY_TEXT};
`;

const TextBtn = styled.div`
  background-color: ${color.COLOR_MAIN};
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
  color: white;
`;
