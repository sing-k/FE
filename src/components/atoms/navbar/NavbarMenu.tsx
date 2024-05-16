import styled from "styled-components";
import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";

type MenuNameType = {
  title: string;
};

const NavbarMenu = ({ title }: MenuNameType) => {
  return <MenuButton>{title}</MenuButton>;
};

export default NavbarMenu;

const MenuButton = styled.button`
  width: 100%;
  font-size: 0.9rem;
  font-weight: 700;
  background-color: transparent;
  text-align: start;
  border-radius: 5px;
  color: ${color.COLOR_DARKGRAY_TEXT};
  white-space: nowrap;
  padding: 0.4rem 0.9rem;

  &:hover {
    ${glassEffectStyle({ bgColor: "#ffffff12" })};
  }
`;
