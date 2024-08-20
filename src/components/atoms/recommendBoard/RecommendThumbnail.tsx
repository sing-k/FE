import styled from "styled-components";

import { RecommendType } from "../../../types/recommendPostType";
import RecommendYoutube from "./RecommendYoutube";

type Props = {
  link: string;
  recommend: RecommendType;
};

const RecommendThumbnail = ({ link, recommend }: Props) => {
  return recommend === "YOUTUBE" ? (
    <RecommendYoutube youtubeLink={link} style={{ height: "100%" }} />
  ) : (
    <Container>
      <Image src={link} />
    </Container>
  );
};

export default RecommendThumbnail;

const Container = styled.div`
  height: 100%;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
