import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";

import NavMenuList from "../../molecules/navbar/NavMenuList";
import LogoImage from "../../common/LogoImage";
import NavSignUpBtn from "./NavSignUpBtn";
import NavProfile from "../../molecules/navbar/NavProfile";

const NavigationBar2 = () => {
  return (
    <Container>
      <NavBar>
        <LogoImage width="60%" />

        <NavProfile />

        <NavSignUpBtn />

        <NavMenuList />
      </NavBar>
    </Container>
  );
};

export default NavigationBar2;

const Container = styled.div`
  width: 18%;
  position: relative;
`;

const NavBar = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;

  border-radius: 0 1rem 1rem 0;
  padding: 3rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
`;
