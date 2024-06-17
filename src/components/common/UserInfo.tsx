import styled from "styled-components";

import { FaUser } from "react-icons/fa";

import color from "../../styles/color";

const size = {
  S: "S",
  M: "M",
  L: "L",
} as const;

type SizeType = keyof typeof size;

type Props = {
  profileImage?: string;
  nickname: string;
  size?: SizeType;
};

const UserInfo = ({ profileImage, nickname, size = "S" }: Props) => {
  return (
    <Container>
      <ImgDiv style={{ width: ImgSize[size] }}>
        {profileImage ? <Img src={profileImage} /> : <ImgIcon />}
      </ImgDiv>

      <Nickname style={{ fontSize: NicknameSize[size] }}>{nickname}</Nickname>
    </Container>
  );
};

export default UserInfo;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ImgDiv = styled.div`
  aspect-ratio: 1 / 1;
  background-color: ${color.COLOR_LIGHTGRAY_BACKGROUND};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ImgIcon = styled(FaUser)`
  color: white;
`;

const Nickname = styled.p`
  font-weight: 600;
  color: ${color.COLOR_GRAY_TEXT};
`;

const ImgSize = {
  [size.S]: "1rem",
  [size.M]: "2rem",
  [size.L]: "3rem",
};

const NicknameSize = {
  [size.S]: "0.8rem",
  [size.M]: "0.9rem",
  [size.L]: "1.2rem",
};
