import styled from "styled-components";
import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";
import { Link } from "react-router-dom";
type MenuNameType = {
  title: string;
  link: string;
};

const NavbarMenu = ({ title, link }: MenuNameType) => {
  return <StyledLink to={link}>{title}</StyledLink>;
};

export default NavbarMenu;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 700;
  background-color: transparent;
  text-align: start;
  border: none;
  border-radius: 5px;
  color: ${color.COLOR_DARKGRAY_TEXT};
  white-space: nowrap;
  padding: 0.6rem 0.9rem;

  &:hover {
    ${glassEffectStyle({ bgColor: "#ffffff12" })};
  }
`;
