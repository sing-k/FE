import { useState, useEffect, ChangeEvent } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import styled from "styled-components";

import { TbMusicSearch } from "react-icons/tb";
import color from "../../../styles/color";

const SearchBar = () => {
  const [input, setInput] = useState<string>("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };
  const handleSearch = () => {
    navigate(`/album/search?query=${input}`);
  };

  useEffect(() => {
    if (query) {
      setInput(query);
    } else {
      setInput("");
    }
  }, [query]);
  return (
    <Container>
      <InputWrapper>
        <Input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="평가할 앨범을 검색해 보세요! ex) 가수 또는 앨범"
        />

        <IconBtn onClick={handleSearch}>
          <TbMusicSearch size="1.2rem" />
        </IconBtn>
      </InputWrapper>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  width: 45%;
  min-width: max-content;
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
