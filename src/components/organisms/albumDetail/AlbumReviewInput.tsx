import { useState } from "react";

import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";

import AlbumStarPicker from "../../molecules/albumDetail/AlbumStarPicker";
import Input from "../../common/Input";

const AlbumReviewInput = () => {
  const [stars, setStars] = useState<number>(0);
  const [input, setInput] = useState<string>("");

  return (
    <Container>
      <Text>별점을 선택해주세요</Text>

      <AlbumStarPicker stars={stars} setStars={setStars} />

      <Input
        input={input}
        setInput={setInput}
        button={{
          text: "등록",
        }}
        placeholder="감상평을 작성해 주세요!"
        textarea={true}
      />
    </Container>
  );
};

export default AlbumReviewInput;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  padding: 1rem;
  border-radius: inherit;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Text = styled.p`
  font-weight: bold;
  text-align: center;
`;
