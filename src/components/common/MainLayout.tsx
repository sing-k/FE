import React from "react";

import styled from "styled-components";
import color from "../../styles/color";

import { useMediaQueries } from "../../hooks";

import LogoImage from "./LogoImage";
import NavigationBar2 from "../organisms/navbar/NavigationBar2";
// import NavigationBar from "../organisms/navbar/NavigationBar";
import SearchBar from "../molecules/search/SearchBar";
import DropDownNavigation from "../organisms/navbar/DropDownNavigation";

type Props = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const { isPc, isTablet } = useMediaQueries();

  return (
    <Layout style={{ flexDirection: isPc ? "row" : "column" }}>
      {/* <NavigationBar /> */}

      {isPc ? (
        <>
          <NavigationBar2 />

          <ContentsWrapper>
            <HeaderWrapper>
              <LogoImage />

              <SearchBar />
            </HeaderWrapper>

            <Contents style={{ width: "80%" }}>{children}</Contents>
          </ContentsWrapper>
        </>
      ) : (
        <>
          <DropDownNavigation />

          <ContentsWrapper>
            <Contents
              style={{
                width: isTablet ? "80%" : "100%",
              }}
            >
              {children}
            </Contents>
          </ContentsWrapper>
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
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  width: 100%;
  padding: 2rem 2rem 150px;
`;
