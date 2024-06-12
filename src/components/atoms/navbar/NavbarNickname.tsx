import styled from "styled-components";

const NavbarNickname = ({ data }: any) => {
  return <NickName>{data.nickname}</NickName>;
};

export default NavbarNickname;

const NickName = styled.div`
  font-weight: 700;
  margin-right: 10%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
