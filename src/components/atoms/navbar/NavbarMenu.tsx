import styled from "styled-components";

type MenuNameType = {
  title: string;
};

const NavbarMenu = ({ title }: MenuNameType) => {
  return <MenuButton>{title}</MenuButton>;
};

export default NavbarMenu;

const MenuButton = styled.button`
  width: 90%;
  font-size: 1rem;
  background-color: transparent;
  text-align: start;
  border-radius: 5px;
  color: #4e4e4e;
  white-space: nowrap;
  &:hover {
    background-color: #ffffff12;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }
`;
