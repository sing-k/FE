import React, { useRef, useState, useCallback, useEffect } from "react";

import styled from "styled-components";

import { FaRegStopCircle, FaPlayCircle } from "react-icons/fa";

import { TrackType } from "../../../types/albumDetailType";
import color from "../../../styles/color";
import { useMediaQueries } from "../../../hooks";

import Modal from "../../common/Modal";

type Props = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  track: TrackType;
};

const TrackPlayerModal = ({ modalVisible, setModalVisible, track }: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const { isMobile } = useMediaQueries();

  // 모달 닫을 때 실행할 함수
  const closeModal = () => {
    setModalVisible(false);
  };

  // 재생 버튼 클릭시 실행할 함수
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
    <Modal
      isOpen={modalVisible}
      closeModal={closeModal}
      width={isMobile ? "80%" : "50%"}
    >
      <audio
        style={{ display: "none" }}
        ref={audioRef}
        src={track.previewUrl}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      />

      <ContentsWrapper>
        {/* <Wrapper>
          <Text>미리듣기 중...</Text>
        </Wrapper> */}

        <PlayBtnWrapper>
          <TrackName>{track.name}</TrackName>

          <PlayBtn onClick={onClickPlayButton}>
            {isPlaying ? <FaRegStopCircle /> : <FaPlayCircle />}
          </PlayBtn>
        </PlayBtnWrapper>

        <Wrapper>
          <Text>미리듣기 중...</Text>
        </Wrapper>

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
      </ContentsWrapper>
    </Modal>
  );
};

export default TrackPlayerModal;

const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
