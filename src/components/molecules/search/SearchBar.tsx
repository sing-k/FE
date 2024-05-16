import { useState, ChangeEvent } from "react";

import styled from "styled-components";

import { TbMusicSearch } from "react-icons/tb";
import color from "../../../styles/color";

const SearchBar = () => {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <Container>
      <InputWrapper>
        <Input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="평가할 앨범을 검색해 보세요!"
        />

        <IconBtn>
          <TbMusicSearch size="1.2rem" />
        </IconBtn>
      </InputWrapper>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  width: 40%;
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

const Input = styled.input`
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
