import { useEffect, useState } from "react";

import styled from "styled-components";

import NavbarMenu from "../../atoms/navbar/NavbarMenu";

import { useLocation } from "react-router-dom";

import { pathName, PathType } from "../../../App";

const NavMenuList = () => {
  const [currentTab, setCurrentTab] = useState<PathType | string>("/");
  const location = useLocation();

  useEffect(() => {
    let [_, path, ...rest] = location.pathname.split("/");
    setCurrentTab(`/${path}`);
  }, [location]);

  return (
    <MenuDiv>
      <NavbarMenu title="홈" link={pathName.home} currentTab={currentTab} />
      <NavbarMenu title="앨범" link={pathName.album} currentTab={currentTab} />
      <NavbarMenu
        title="음악 추천 게시판"
        link={pathName.musicRecommendationBoard}
        currentTab={currentTab}
      />
      <NavbarMenu
        title="자유 게시판"
        link={pathName.board}
        currentTab={currentTab}
      />
    </MenuDiv>
  );
};

export default NavMenuList;

const MenuDiv = styled.div`
  width: 100%;
  flex-basis: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
