import React, { useState } from "react";

import styled from "styled-components";

import { FaSearch } from "react-icons/fa";

import { PostFilterType, postFilterType } from "../../../types/postType";

import Input from "../../common/Input";
import SearchPostSelection from "./SearchPostSelection";

type Props = {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<PostFilterType>>;
};

const SearchPost = ({ setKeyword, setFilter }: Props) => {
  const [input, setInput] = useState<string>("");
  const [filterInput, setFilterInput] = useState<PostFilterType>(
    Object.keys(postFilterType)[0] as PostFilterType
  );

  const handleSearch = () => {
    setKeyword(input);
    setFilter(filterInput);
  };

  return (
    <Container>
      <SearchPostSelection filter={filterInput} setFilter={setFilterInput} />

      <Input
        input={input}
        setInput={setInput}
        placeholder="검색어 입력"
        button={{
          icon: <FaSearch />,
          onClickButton: handleSearch,
        }}
        width="40%"
      />
    </Container>
  );
};

export default SearchPost;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.3rem;
`;
