import styled from "styled-components";

import NavbarMenu from "../../atoms/navbar/NavbarMenu";

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
