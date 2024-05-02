import styled from "styled-components";

import ProfileImg from "../../../assets/img/navbar-profile-Img.png";

const NavbarProfileImg = () => {
  return <LogoImage />;
};

export default NavbarProfileImg;

const LogoImage = styled.div`
  background-image: url(${ProfileImg});
  width: 80px;
  height: 80px;
  background-size: contain;
  background-repeat: no-repeat;
  border: 4px double #eeeeeeb1;
  border-radius: 50%;
  box-shadow: 0px 0px 16px #eeeeee6e;
  margin-bottom: 3%;
`;
