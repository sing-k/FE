import styled from "styled-components";

import NavbarMenu from "../../atoms/navbar/NavbarMenu";

import { Link } from "react-router-dom";

import { glassEffectStyle } from "../../../styles/style";
import color from "../../../styles/color";

const NavMenuList = () => {
  return (
    <MenuDiv>
      <NavbarMenu title="홈" link="/" />
      <NavbarMenu title="앨범" link="/album" />
      <NavbarMenu title="음악 추천 게시판" link="/" />
      <NavbarMenu title="자유 게시판" link="/" />
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

const StyledLink = styled(Link)`
  width: 100%;
  font-size: 0.9rem;
  font-weight: 700;
  background-color: transparent;
  text-align: start;
  border-radius: 5px;
  color: ${color.COLOR_DARKGRAY_TEXT};
  white-space: nowrap;

  &:hover {
    ${glassEffectStyle({ bgColor: "#ffffff12" })};
  }
`;
