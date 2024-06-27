import React, {
  useRef,
  MouseEvent,
  useState,
  useCallback,
  useEffect,
} from "react";

import styled from "styled-components";

import { IoMdClose } from "react-icons/io";
import { FaRegStopCircle, FaPlayCircle } from "react-icons/fa";

import { TrackType } from "../../../types/albumDetailType";
import color from "../../../styles/color";
import { useMediaQueries } from "../../../hooks";

type Props = {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  track: TrackType;
};

const TrackPlayerModal = ({ track, setModalVisible }: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const { isMobile } = useMediaQueries();

  const closeModal = (e: MouseEvent<any>) => {
    if (e.target === e.currentTarget) {
      setModalVisible(false);
    }
  };

  const onClickPlayButton = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }

      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const onTimeUpdate = () => {
    if (audioRef.current) {
      const currentProgress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const onEnded = () => {
    if (progressRef.current) {
      setIsPlaying(false);
      setProgress(0);
    }
  };

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.transform = `translateX(${progress - 100}%)`;
    }
  }, [progress]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <Container onClick={closeModal}>
      <audio
        style={{ display: "none" }}
        ref={audioRef}
        src={track.previewUrl}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      />

      <Modal
        style={{
          width: isMobile ? "80%" : "50%",
        }}
      >
        <Wrapper>
          <Text>미리듣기 중...</Text>
          <CloseBtn onClick={closeModal} />
        </Wrapper>

        <PlayBtnWrapper>
          <TrackName>{track.name}</TrackName>

          <PlayBtn onClick={onClickPlayButton}>
            {isPlaying ? <FaRegStopCircle /> : <FaPlayCircle />}
          </PlayBtn>
        </PlayBtnWrapper>

        <Wrapper>
          <ProgressBar>
            <Progress ref={progressRef} />
          </ProgressBar>

          <Duration>
            {audioRef.current ? (
              <>
                0:
                {Math.floor(audioRef.current.currentTime as number)}
                /0:{Math.floor(audioRef.current.duration as number)}
              </>
            ) : (
              "0:00/0:00"
            )}
          </Duration>
        </Wrapper>
      </Modal>
    </Container>
  );
};

export default TrackPlayerModal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${color.COLOR_GRAY_TEXT};
`;

const CloseBtn = styled(IoMdClose)`
  cursor: pointer;
  font-size: 1.2rem;
`;

const PlayBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const TrackName = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;

const PlayBtn = styled.div`
  cursor: pointer;
  color: ${color.COLOR_MAIN};
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 10px;
  border-radius: 10px;
  background-color: ${color.COLOR_LIGHTGRAY_BACKGROUND};
  overflow: hidden;
`;

const Progress = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${color.COLOR_MAIN};
  border-radius: inherit;
  transition: 1s;
  transform: translateX(-100%);
`;

const Duration = styled.p`
  font-size: 0.8rem;
  width: calc(0.8rem * 6);
  color: ${color.COLOR_GRAY_TEXT};
  text-align: end;
`;
