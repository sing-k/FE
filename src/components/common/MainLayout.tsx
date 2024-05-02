import React from "react";

import styled from "styled-components";

import { useMediaQueries } from "../../hooks";
import NavigationBar from "../organisms/navbar/NavigationBar";

import color from "../../styles/color";

type Props = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const { isPc, isTablet, isMobile } = useMediaQueries();

  return (
    <Layout>
      <NavigationBar />
      <Contents
        style={{
          width: isPc ? "70%" : isTablet ? "80%" : isMobile ? "100%" : "100%",
        }}
      >
        {children}
      </Contents>
    </Layout>
  );
};

export default MainLayout;

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(
    to bottom,
    ${color.COLOR_MAIN_PURPLE},
    ${color.COLOR_MAIN_MIDDLE},
    ${color.COLOR_MAIN_SKYBLUE}
  );
`;

const Contents = styled.div`
  padding: 2rem;
`;
