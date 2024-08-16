import { useState, useEffect } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

import styled from "styled-components";

import YouTube from "react-youtube";

import LinkInput from "./LinkInput";
import { youtubeLinkToId } from "../../../utils/linkValidation";

type Props = {
  register: UseFormRegister<FieldValues>;
  youtubeLink: string;
};

const SelectYoutubeForm = ({ register, youtubeLink }: Props) => {
  const [videoId, setVideoId] = useState<string>("");

  const onReady = (event: any) => {
    event.target.pauseVideo();
  };

  useEffect(() => {
    if (youtubeLink) {
      setVideoId(youtubeLinkToId(youtubeLink));
    }
  }, [youtubeLink]);

  return (
    <Container>
      <LinkInput
        register={register}
        name="youtubeLink"
        placeholder="추천할 유튜브 동영상 링크를 입력해 주세요!"
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
