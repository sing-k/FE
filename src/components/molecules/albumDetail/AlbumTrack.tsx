import { useState, useCallback } from "react";

import styled from "styled-components";

import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";

import { timeFormat } from "../../../utils/time";

import { FaRegStopCircle, FaPlayCircle } from "react-icons/fa";
import { TrackType } from "../../../types/albumDetailType";

import TrackPlayerModal from "../../organisms/albumDetail/TrackPlayerModal";

type Props = {
  track: TrackType;
};

const AlbumTrack = ({ track }: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onClickPlayButton = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);

  return (
    <>
      <Container>
        <Wrapper style={{ flex: 1 }}>
          <Number>{track.trackNumber}</Number>
          <TrackName>{track.name}</TrackName>
          <Artist>{track.artists[0].name}</Artist>
        </Wrapper>

        <Wrapper>
          <Time>{timeFormat(track.duration)}</Time>

          {track.playable && (
            <PlayButton onClick={onClickPlayButton}>
              {modalVisible ? <FaRegStopCircle /> : <FaPlayCircle />}
            </PlayButton>
          )}
        </Wrapper>
      </Container>

      {track.playable && modalVisible && (
        <TrackPlayerModal
          track={track}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </>
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
  gap: 1rem;
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
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Artist = styled.p`
  color: ${color.COLOR_GRAY_TEXT};
  font-size: 0.9rem;
  font-weight: bold;
`;

const Time = styled.p`
  color: ${color.COLOR_GRAY_TEXT};
  font-size: 0.8rem;
`;

const PlayButton = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: ${color.COLOR_MAIN};
  display: flex;
  align-items: center;
  jusitfy-content: center;
`;
