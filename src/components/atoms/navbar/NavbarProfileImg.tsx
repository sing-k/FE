import styled from "styled-components";

import color from "../../../styles/color";

import { FaUser } from "react-icons/fa";

const NavbarProfileImg = ({ data, width = "50px" }: any) => {
  const imageSrc = data?.imageUrl;
  return (
    <Container style={{ width }}>
      {imageSrc ? <Image src={imageSrc} /> : <NoneImage size={"50%"} />}
    </Container>
  );
};

export default NavbarProfileImg;

const Container = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${color.COLOR_LIGHTGRAY_BACKGROUND};
  border: 3px double #eeeeeeb1;
  box-shadow: 0px 0px 16px #eeeeee6e;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const NoneImage = styled(FaUser)`
  color: white;
`;
