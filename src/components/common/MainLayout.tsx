import React from "react";

import styled from "styled-components";

import { useMediaQueries } from "../../hooks";

import LogoImage from "./LogoImage";
import NavigationBar2 from "../organisms/navbar/NavigationBar2";
import NavigationBar from "../organisms/navbar/NavigationBar";

import color from "../../styles/color";

type Props = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const { isPc, isTablet, isMobile } = useMediaQueries();

  return (
    <Layout>
      {/* <NavigationBar /> */}

      {isPc ? (
        <>
          <NavigationBar2 />

          <ContentsWrapper>
            <HeaderWrapper>
              <LogoImage />
            </HeaderWrapper>

            <Contents style={{ width: "80%" }}>{children}</Contents>
          </ContentsWrapper>
        </>
      ) : (
        <>
          <Contents
            style={{
              width: isTablet ? "80%" : "100%",
            }}
          >
            {children}
          </Contents>
        </>
      )}
    </Layout>
  );
};

export default MainLayout;

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;

  background: linear-gradient(
    to bottom,
    ${color.COLOR_MAIN_PURPLE},
    ${color.COLOR_MAIN_MIDDLE},
    ${color.COLOR_MAIN_SKYBLUE}
  );
`;

const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  width: 100%;
`;

const Contents = styled.div`
  width: 100%;
  padding: 2rem;
`;
