import styled from "styled-components";

import color from "../../../styles/color";

import { FaUser } from "react-icons/fa";

const NavbarProfileImg = () => {
  const imageSrc = null;

  return (
    <Container>{imageSrc ? <Image src={imageSrc} /> : <FaUser />}</Container>
  );
};

export default NavbarProfileImg;

const Container = styled.div`
  width: 50px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${color.COLOR_LIGHTGRAY_BACKGROUND};
  border: 3px double #eeeeeeb1;
  box-shadow: 0px 0px 16px #eeeeee6e;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
