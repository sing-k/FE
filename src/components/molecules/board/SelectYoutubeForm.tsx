import { useState, ChangeEvent } from "react";

import styled from "styled-components";

import YouTube from "react-youtube";

import { isYouTubeURL } from "../../../utils/url";

import LinkInput from "./LinkInput";

const SelectYoutubeForm = () => {
  const [input, setInput] = useState<string>("");
  const [videoId, setVideoId] = useState<string>("");

  const onReady = (event: any) => {
    event.target.pauseVideo();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;

    if (!isYouTubeURL(url)) {
      setVideoId("");
      return;
    }

    const id = new URLSearchParams(new URL(url).search).get("v");

    setVideoId(id as string);
  };

  return (
    <Container>
      <LinkInput
        input={input}
        setInput={setInput}
        handleChange={handleChange}
        placeholder="추천할 유튜브 동영상 링크를 입력해 주세요!"
        linkId={videoId}
      />

      {videoId && (
        <StyledYouTube
          videoId={videoId}
          opts={{
            width: "100%",
            height: "100%",
            playVars: {
              autoPlay: 0,
              rel: 0,
            },
          }}
          onReady={onReady}
        />
      )}
    </Container>
  );
};

export default SelectYoutubeForm;

const Container = styled.div`
  width: 100%;
`;

const StyledYouTube = styled(YouTube)`
  width: 50%;
  min-width: 200px;
  aspect-ratio: 16 / 9;
  margin-top: 1rem;
`;
