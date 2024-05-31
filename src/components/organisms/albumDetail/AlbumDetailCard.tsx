import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";

import AlbumDetailInfoText from "../../molecules/albumDetail/AlbumDetailInfoText";
import Badge from "../../../assets/img/badge.svg";

import { useMediaQueries } from "../../../hooks";

const AlbumDetailCard = () => {
  const { isMobile } = useMediaQueries();
  return (
    <Container
      style={
        isMobile
          ? { flexDirection: "column", alignItems: "flex-start" }
          : { flexDirection: "row", alignItems: "center" }
      }
    >
      <AlbumImage
        style={{
          width: isMobile ? "50%" : "25%",
        }}
        src="https://image.bugsm.co.kr/album/images/500/40940/4094086.jpg"
      />

      <AlbumDetailInfoText
        type={"EP"}
        title={"Discord (TAK Remix)"}
        artist={"QWER"}
        releaseDate={"2024-01-01"}
        genre={"일렉트로닉"}
        rating={3.5}
        reviewCount={10}
      />

      <BadgeImage src={Badge} />
    </Container>
  );
};

export default AlbumDetailCard;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const AlbumImage = styled.img`
  display: inline-block;
  width: 25%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  align-self: center;
`;

const BadgeImage = styled.img`
  // background-color: orange;
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.8rem;
`;
