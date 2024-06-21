import { useState } from "react";

import styled from "styled-components";

import LinkInput from "./LinkInput";

const SelectAlbumForm = () => {
  const [input, setInput] = useState<string>("");

  return (
    <Container>
      <LinkInput
        input={input}
        setInput={setInput}
        placeholder="추천할 앨범의 페이지 링크를 입력해 주세요!"
      />
    </Container>
  );
};

export default SelectAlbumForm;

const Container = styled.div`
  width: 100%;
`;
