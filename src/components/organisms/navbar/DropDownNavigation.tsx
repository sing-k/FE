import { useState } from "react";

import styled, { keyframes } from "styled-components";

import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";

import { IoMenu } from "react-icons/io5";

import LogoImage from "../../common/LogoImage";
import SearchBar from "../../molecules/search/SearchBar";
import NavProfile from "../../molecules/navbar/NavProfile";
import NavSignUpBtn from "./NavSignUpBtn";
import NavMenuList from "../../molecules/navbar/NavMenuList";
import LogoutBtn from "../../atoms/navbar/LogoutBtn";

const DropDownNavigation = ({ isLogin, data }: any) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  return (
    <Container>
      <Inner>
        <LogoImage width={"6rem"} />
        <SearchBar />
        <IoMenu
          size={"1.6rem"}
          color={color.COLOR_GRAY_TEXT}
          style={{ cursor: "pointer" }}
          onClick={() => setIsOpen(!isOpen)}
        />
      </Inner>

      {isOpen !== null && (
        <>
          <Menu className={isOpen ? "open" : "close"}>
            {isLogin === "true" && data ? (
              <NavProfile data={data} />
            ) : (
              <NavSignUpBtn />
            )}
            {isLogin === "true" && data ? (
              <>
                <NavMenuList />
                <LogoutDiv>
                  <LogoutBtn />
                </LogoutDiv>
              </>
            ) : (
              <NavMenuList />
            )}
          </Menu>
        </>
      )}
    </Container>
  );
};

export default DropDownNavigation;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;

  display: flex;
  flex-direction: column;
  //   border-radius: 0 0 1rem 1rem;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
  //   background: inherit;
`;

const dropDown = keyframes`
0% {
    max-height: 0;
    padding: 0;
}
100% {
    max-height: 700px;
    padding: 2rem;
}

`;
const dropUp = keyframes`
0% {
    max-height: 700px;
    padding: 2rem;
}
100% {
    max-height: 0;
    padding: 0;
}

`;

const Menu = styled.div`
  width: 100%;
  max-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &.open {
    animation: ${dropDown} 1s ease forwards;
  }
  &.close {
    animation: ${dropUp} 0.5s ease;
  }
`;
const LogoutDiv = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
