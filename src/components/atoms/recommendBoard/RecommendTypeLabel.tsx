import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";
import color from "../../../styles/color";

import Logo from "../../../assets/img/singk-logo.png";
import { FaYoutube } from "react-icons/fa";

import { RecommendType } from "../../../types/recommendPostType";

type Props = {
  recommend: RecommendType;
};

const RecommendTypeLabel = ({ recommend }: Props) => {
  return (
    <Container>
      {recommend === "YOUTUBE" ? (
        <YoutubeIcon />
      ) : recommend === "ALBUM" ? (
        <Text>글</Text>
      ) : (
        <LogoImg src={Logo} />
      )}
    </Container>
  );
};

export default RecommendTypeLabel;

const Container = styled.div`
  border-radius: 3px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  ${glassEffectStyle()}
  height: 100%;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: inherit;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${color.COLOR_GRAY_TEXT};
`;

const LogoImg = styled.img`
  ${glassEffectStyle()}
  height: 100%;
  object-fit: contain;
  border-radius: inherit;
`;

const YoutubeIcon = styled(FaYoutube)`
  color: ${color.COLOR_YOUTUBE_RED};
  font-size: 1.5rem;
`;
