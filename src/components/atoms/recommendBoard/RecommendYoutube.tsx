import React, { useEffect, useState } from "react";

import styled from "styled-components";

import YouTube from "react-youtube";

import { youtubeLinkToId } from "../../../utils/linkValidation";

type Props = {
  youtubeLink?: string;
  style?: React.CSSProperties;
};

const RecommendYoutube = ({ youtubeLink = "", style = {} }: Props) => {
  const [videoId, setVideoId] = useState<string>("");

  const onReady = (event: any) => {
    event.target.pauseVideo();
  };

  useEffect(() => {
    if (youtubeLink) {
      setVideoId(youtubeLinkToId(youtubeLink));
    } else {
      setVideoId("");
    }
  }, [youtubeLink]);

  return (
    videoId && (
      <StyledYoutube
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
        style={style}
      />
    )
  );
};

export default RecommendYoutube;

const StyledYoutube = styled(YouTube)`
  aspect-ratio: 16 / 9;
`;
