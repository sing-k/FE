import styled from "styled-components";

import { RecommendType } from "../../../types/recommendPostType";
import RecommendYoutube from "./RecommendYoutube";

type Props = {
  recommend: RecommendType;
  link: string;
};

const RecommendContents = ({ recommend, link }: Props) => {
  return (
    <Container>
      <Contents>
        {recommend === "IMAGE" ? (
          <Image src={link} />
        ) : recommend === "YOUTUBE" ? (
          <RecommendYoutube youtubeLink={link} />
        ) : (
          <Image src={link} />
        )}
      </Contents>
    </Container>
  );
};

export default RecommendContents;

const Container = styled.div`
  width: 100%;
`;

const Contents = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;
