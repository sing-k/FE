import { useEffect, useRef, useState } from "react";

import styled from "styled-components";

import { AlbumCard } from "../../molecules";

import { useMediaQueries } from "../../../hooks";

const data = [...new Array(10).fill(0)];

const AlbumCarousel = () => {
  const [itemWidth, setItemWidth] = useState<number>(0);
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const itemRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const { isPc, isTablet, isMobile } = useMediaQueries();

  const handleResize = () => {
    if (itemRef.current === null) return;

    setItemWidth(itemRef.current.offsetWidth);
  };

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
                ? "20%"
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
    </Container>
  );
};

export default AlbumCarousel;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Carousel = styled.div`
  width: 100%;
  display: flex;
  transition: 0.5s;
  gap: 1rem;

  &:hover {
    animation-play-state: paused;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  flex-shrink: 0;
`;
