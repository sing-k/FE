import { useState } from "react";

import { TbMusicSearch } from "react-icons/tb";

import Input from "../../common/Input";

const SearchBar = () => {
  const [input, setInput] = useState<string>("");

  return (
    <Input
      input={input}
      setInput={setInput}
      placeholder={"평가할 앨범을 검색해 보세요!"}
      button={{
        icon: <TbMusicSearch size="1.2rem" />,
      }}
      width="45%"
    />
  );
};

export default SearchBar;
