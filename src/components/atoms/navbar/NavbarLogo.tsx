import styled from "styled-components";

import Logo from "../../../assets/img/navbar-logo.png";

const NavbarLogo = () => {
  return <LogoImage />;
};

export default NavbarLogo;

const LogoImage = styled.div`
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 80px;
  height: 60px; // 부모 만들어지면 크기 수정해야됨
  flex-basis: 10%;
  margin-top: 5%;
`;
