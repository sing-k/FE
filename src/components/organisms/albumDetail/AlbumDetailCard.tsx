import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";

import AlbumDetailInfoText from "../../molecules/albumDetail/AlbumDetailInfoText";
import Badge from "../../../assets/img/badge.svg";

import { useMediaQueries } from "../../../hooks";

import { AlbumDetailType } from "../../../types/albumDetailType";

type Props = {
  data: AlbumDetailType;
};

const AlbumDetailCard = ({ data }: Props) => {
  const { images, type, name, artists, releasedAt, count, averageScore } = data;

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
        src={images[0].imageUrl}
      />

      <AlbumDetailInfoText
        type={type}
        title={name}
        artist={artists[0].name}
        releaseDate={releasedAt}
        genre={"일렉트로닉"}
        rating={averageScore}
        reviewCount={count}
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
