import styled from "styled-components";
import color from "../../styles/color";

import { Outlet } from "react-router-dom";

import { useMediaQueries } from "../../hooks";

import LogoImage from "./LogoImage";
import NavigationBar2 from "../organisms/navbar/NavigationBar2";
import SearchBar from "../molecules/search/SearchBar";
import DropDownNavigation from "../organisms/navbar/DropDownNavigation";

import { useMemberInfoQuery } from "../../hooks/services/queries/userQueries";

// type Props = {
//   children?: React.ReactNode;
// };

const MainLayout = () => {
  const { isPc, isTablet } = useMediaQueries();
  const isLoggedIn = localStorage.getItem("loginState");
  const { data } = useMemberInfoQuery();

  // if (isLoading) {
  //   return <div>로딩중</div>;
  // }

  return (
    <Layout style={{ flexDirection: isPc ? "row" : "column" }}>
      {isPc ? (
        <>
          {data ? (
            <NavigationBar2 isLogin={isLoggedIn} data={data} />
          ) : (
            <NavigationBar2 isLogin={isLoggedIn} data={data} />
          )}

          <ContentsWrapper>
            <HeaderWrapper>
              <LogoImage />

              <SearchBar />
            </HeaderWrapper>

            <Contents>
              <Outlet />
            </Contents>
          </ContentsWrapper>
        </>
      ) : (
        <>
          {data ? (
            <DropDownNavigation isLogin={isLoggedIn} data={data} />
          ) : (
            <DropDownNavigation isLogin={isLoggedIn} data={data} />
          )}

          <ContentsWrapper>
            <Contents
              style={{
                width: isTablet ? "80%" : "100%",
              }}
            >
              <Outlet />
            </Contents>
          </ContentsWrapper>
        </>
      )}
    </Layout>
  );
};

export default MainLayout;

const Layout = styled.div`
  width: 100%;
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
  overflow: hidden;
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
  width: 80%;
  padding: 2rem 2rem 150px;
`;
