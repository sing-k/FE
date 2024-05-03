import styled from "styled-components";

const NavbarNickname = () => {
  return <NickName>킹연두</NickName>;
};

export default NavbarNickname;

const NickName = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-right: 10%;
  /* margin-left: 5%; */

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
