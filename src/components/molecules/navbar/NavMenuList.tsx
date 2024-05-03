import styled from "styled-components";

import NavbarMenu from "../../atoms/navbar/NavbarMenu";
const NavMenuList = () => {
  return (
    <MenuDiv>
      <NavbarMenu title="홈" />
      <NavbarMenu title="앨범" />
      <NavbarMenu title="음악 추천 게시판" />
      <NavbarMenu title="자유 게시판" />
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
  padding: 2%;
  margin-bottom: 5%;
`;
