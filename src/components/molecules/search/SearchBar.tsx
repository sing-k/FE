import { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { TbMusicSearch } from "react-icons/tb";

import Input from "../../common/Input";

import { pathName } from "../../../App";

const SearchBar = () => {
  const [input, setInput] = useState<string>("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`${pathName.album}?query=${input}`);
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query");

    if (query) {
      setInput(query);
    } else {
      setInput("");
    }
  }, [location]);

  return (
    <Input
      input={input}
      setInput={setInput}
      placeholder={"평가할 앨범을 검색해 보세요!"}
      button={{
        icon: <TbMusicSearch size="1.2rem" />,
        onClickButton: handleSearch,
      }}
      width="45%"
    />
  );
};

export default SearchBar;
