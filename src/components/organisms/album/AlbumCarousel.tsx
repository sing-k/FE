import { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import { AlbumCard } from "../../molecules";

import { useMediaQueries } from "../../../hooks";

import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";

const GAP_REM = 1.5;
const data = [...new Array(10).fill(0)];

const AlbumCarousel = () => {
  const [itemWidth, setItemWidth] = useState<number>(0);
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const itemRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const { isPc, isTablet, isMobile } = useMediaQueries();

  const handleClickPrev = () => {
    if (currentIdx === 0) setCurrentIdx(9);
    else setCurrentIdx(currentIdx - 1);
  };
  const handleClickNext = () => {
    if (currentIdx === 9) setCurrentIdx(0);
    else setCurrentIdx(currentIdx + 1);
  };

  const handleResize = () => {
    if (itemRef.current === null) return;

    setItemWidth(itemRef.current.offsetWidth);
  };

  useEffect(() => {
    if (carouselRef.current) {
      let value = `calc(-${itemWidth * currentIdx}px - ${
        GAP_REM * currentIdx
      }rem)`;
      carouselRef.current.style.transform = `translateX(${value})`;
    }

    if (indicatorRef.current) {
      const value = Math.floor(currentIdx / 3) * 3;

      indicatorRef.current.style.transform = `translateX(-${value}rem)`;
    }
  }, [currentIdx]);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <Carousel ref={carouselRef}>
        {data.map((_, idx) => (
          <CardWrapper
            key={`albumcard${idx}`}
            style={{
              width: isPc
                ? "17%"
                : isTablet
                  ? "30%"
                  : isMobile
                    ? "40%"
                    : "100%",
            }}
            ref={itemRef}
          >
            <AlbumCard />
          </CardWrapper>
        ))}
      </Carousel>

      <IndicatorWrapper>
        <IndicatorBtn onClick={handleClickPrev}>
          <FaChevronCircleLeft />
        </IndicatorBtn>

        <div style={{ overflow: "hidden" }}>
          <Indicator ref={indicatorRef}>
            {data.map((_, idx) => (
              <Dot
                key={`${idx}indicator`}
                className={idx === currentIdx ? "focused" : "none"}
              />
            ))}
          </Indicator>
        </div>

        <IndicatorBtn onClick={handleClickNext}>
          <FaChevronCircleRight />
        </IndicatorBtn>
      </IndicatorWrapper>
    </Container>
  );
};

export default AlbumCarousel;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Carousel = styled.div`
  display: flex;
  transition: 0.5s;
  gap: ${GAP_REM}rem;

  &:hover {
    animation-play-state: paused;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  flex-shrink: 0;
`;

const IndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.8rem;
`;

const Indicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 2.5rem;
  transition: 0.5s;
`;

const Dot = styled.div`
  aspect-ratio: 1 / 1;
  width: 0.5rem;
  flex-shrink: 0;
  ${glassEffectStyle()}
  border-radius: 50%;
  transition: 0.5s;

  &.focused {
    background-color: ${color.COLOR_WHITE_BACKGROUND};
  }
`;

const IndicatorBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${color.COLOR_WHITE_BACKGROUND};
  font-size: 1rem;
`;
