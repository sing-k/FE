import { useState } from "react";

import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

import { useMediaQueries } from "../../../hooks";
import NavbarLogo from "../../atoms/navbar/NavbarLogo";
import NavbarBtn from "../../atoms/navbar/NavbarBtn";
import NavMenuList from "../../molecules/navbar/NavMenuList";
import NavProfile from "../../molecules/navbar/NavProfile";
import LogoutBtn from "../../atoms/navbar/LogoutBtn";
import NavClickIcon from "../../atoms/navbar/NavClickIcon";

import { glassEffectStyle } from "../../../styles/style";

type ContainerProps = {
  $isPc: boolean;
  $isTablet: boolean;
  $isMobile: boolean;
  $isNavClick: boolean;
};
// $를 붙인이유 : 변수를 카멜케이스로 작성하니 콘솔 오류가 떠서 해결하고자 작성

const NavigationBar = () => {
  const { isPc, isTablet, isMobile } = useMediaQueries();
  const [isNavClick, setIsNavClick] = useState<boolean>(false);
  const isLoggedIn = false; // 나중에 유저관련 로직 변경/임시처리

  const handleNavClick = () => {
    setIsNavClick(true);
  };
  return (
    <>
      {isNavClick && <Wrapper onClick={() => setIsNavClick(false)} />}
      <Container
        $isPc={isPc}
        $isTablet={isTablet}
        $isMobile={isMobile}
        $isNavClick={isNavClick}
        onClick={handleNavClick}
      >
        {isPc || (isTablet && isNavClick) || (isMobile && isNavClick) ? (
          <>
            <NavbarLogo />
            {isLoggedIn ? (
              <>
                <NavProfile />
                <NavMenuList />
                <LogoutBtn />
              </>
            ) : (
              <>
                <ButtonContainer>
                  <StyledLink to="/login">
                    <NavbarBtn title="로그인" />
                  </StyledLink>
                  <StyledLink to="/signup">
                    <NavbarBtn title="회원가입" />
                  </StyledLink>
                </ButtonContainer>
                <NavMenuList />
              </>
            )}
          </>
        ) : (
          <NavClickIcon />
        )}
      </Container>
    </>
  );
};

export default NavigationBar;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Container = styled.div<ContainerProps>`
  ${glassEffectStyle()}

  box-shadow: 0 8px 10px 0 rgba(113, 113, 113, 0.344);
  position: fixed;
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  ${({ $isPc, $isTablet, $isMobile, $isNavClick }) => {
    if ($isPc) {
      return css`
        width: 15%;
        height: 100%;
        border-radius: 0 20px 20px 0;
        left: 0;
      `;
    } else if ($isTablet) {
      return css`
        width: ${$isNavClick ? "25%" : "5%"};
        height: 100%;
        border-radius: 0 20px 20px 0;
        left: 0;
        transition: width 0.1s ease-in-out;
      `;
    } else if ($isMobile) {
      return css`
        width: 100vw;
        height: ${$isNavClick ? "80%" : "5%"};
        flex-direction: column;
        border-radius: 20px 20px 0 0;
        bottom: 0;
        transition: height 0.1s ease-in-out;
      `;
    }
  }}
`;

const ButtonContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff12;
  border-radius: 10px;
  box-shadow: inset 0 0 1px 1px rgba(99, 99, 99, 0.169);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  padding: 2%;
  margin-bottom: 5%;
`;
const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff12;
  border-radius: 10px;
  padding: 2%;
`;
