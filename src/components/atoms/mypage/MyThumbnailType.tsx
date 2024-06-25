import React from "react";
import styled from "styled-components";
import MusicIcon from "../../../assets/img/singk-logo.png"; // 이미지 파일 직접 import
import { FaYoutube } from "react-icons/fa"; // React Icons 라이브러리에서 유튜브 아이콘 import

interface IconProps {
  type: "text" | "music" | "youtube";
}

const MyThumbnailType: React.FC<IconProps> = ({ type }) => {
  if (type === "text") {
    return <TextIcon>글</TextIcon>;
  }

  if (type === "youtube") {
    return <YoutubeIcon />;
  }

  const icons = {
    music: MusicIcon,
  };

  return <StyledIcon src={icons[type]} alt={`${type} icon`} />;
};

export default MyThumbnailType;

const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const TextIcon = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  background-color: #f0f0f0;
  border-radius: 50%;
`;

const YoutubeIcon = styled(FaYoutube)`
  width: 24px;
  height: 24px;
  color: red; // 유튜브 아이콘 색상 설정
`;
