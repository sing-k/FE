import React, { ChangeEvent, KeyboardEvent } from "react";

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
  textarea?: boolean;
};

const Input = ({
  input,
  setInput,
  type,
  button,
  placeholder,
  width,
  textarea,
}: Props) => {
  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value, tagName } = e.target;
    setInput(value);

    if (tagName === "TEXTAREA") {
      if (e.target.scrollHeight < 200)
        e.target.style.height = `${e.target.scrollHeight}px`; // 실제 내용에 맞게 높이 설정
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.key === "Enter" && button?.onClickButton) {
      button.onClickButton();
    }
  };

  return (
    <Container style={width ? { width } : {}}>
      <BorderBox>
        <InputWrapper>
          {textarea ? (
            <StyledTextarea
              value={input}
              onChange={handleChange}
              placeholder={placeholder}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <StyledInput
              type={type ? type : "text"}
              value={input}
              onChange={handleChange}
              placeholder={placeholder}
              onKeyDown={handleKeyDown}
            />
          )}

          {button?.icon && (
            <IconBtn onClick={button?.onClickButton}>{button.icon}</IconBtn>
          )}
        </InputWrapper>
      </BorderBox>

      {button?.text && (
        <TextBtn onClick={button?.onClickButton}>{button.text}</TextBtn>
      )}
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
  border-radius: calc(1.15rem + 1.5px);
  border: 3px double #eeeeeeb1;
  box-shadow: 0px 0px 16px #eeeeee6e;
  overflow: hidden;
`;

const InputWrapper = styled.div`
  width: 100%;
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

const StyledTextarea = styled.textarea`
  display: inline-block;
  border: none;
  flex-grow: 1;
  display: flex;
  align-items: center;
  resize: none;
  line-height: 1.2rem;
  height: 1.4rem;

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
