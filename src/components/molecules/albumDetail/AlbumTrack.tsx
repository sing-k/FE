import { useState, useCallback } from "react";

import styled from "styled-components";

import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";

import { FaRegStopCircle, FaPlayCircle } from "react-icons/fa";

type Props = {
  number: number;
};

const AlbumTrack = (props: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const onClickPlayButton = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  return (
    <Container>
      <Wrapper>
        <Number>{props.number}</Number>
        <TrackName>별의 하모니</TrackName>
        <Artist>QWER (feat.춘식)</Artist>
      </Wrapper>

      <PlayButton onClick={onClickPlayButton}>
        {isPlaying ? <FaRegStopCircle /> : <FaPlayCircle />}
      </PlayButton>
    </Container>
  );
};

export default AlbumTrack;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  border-radius: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Number = styled.p`
  color: ${color.COLOR_MAIN};
  font-weight: bold;
`;

const TrackName = styled.p`
  font-weight: bold;
`;

const Artist = styled.p`
  color: ${color.COLOR_GRAY_TEXT};
`;

const PlayButton = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  color: ${color.COLOR_MAIN};
`;
