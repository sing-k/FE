import { useState } from "react";

import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";

import AlbumStarPicker from "../../molecules/albumDetail/AlbumStarPicker";
import Input from "../../common/Input";

import { usePostAlbumReview } from "../../../hooks/queries/albumDetail";

type Props = {
  albumId: string;
};

const AlbumReviewInput = ({ albumId }: Props) => {
  const [stars, setStars] = useState<number>(0);
  const [input, setInput] = useState<string>("");

  const postAlbumReviewMutation = usePostAlbumReview(albumId);

  const checkValidation = (): boolean => {
    if (stars === 0) {
      alert("별점을 선택해주세요!");
      return false;
    }
    if (input === "") {
      alert("감상평을 작성해주세요!");
      return false;
    }
    return true;
  };

  const onClickButton = async () => {
    if (!checkValidation()) return;

    const res = await postAlbumReviewMutation.mutateAsync({
      albumId,
      content: input,
      score: stars,
    });

    if (res) {
      alert("감상평이 등록되었습니다.");
      setInput("");
      setStars(0);
    }
  };

  return (
    <Container>
      <Text>별점을 선택해주세요</Text>

      <AlbumStarPicker stars={stars} setStars={setStars} />

      <Input
        input={input}
        setInput={setInput}
        button={{
          text: "등록",
          onClickButton: onClickButton,
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
