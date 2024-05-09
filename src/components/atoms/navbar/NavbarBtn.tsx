import styled from "styled-components";

import color from "../../../styles/color";

type NavbarBtnProps = {
  title: string;
  onClick: () => void;
};
const NavbarBtn = ({ title, onClick }: NavbarBtnProps) => {
  return <NavbarButton onClick={onClick}>{title}</NavbarButton>;
};

export default NavbarBtn;

const NavbarButton = styled.button`
  width: 90%;
  height: 100%;
  font-size: 0.8rem;
  font-weight: 800;
  color: ${color.COLOR_GRAY_TEXT};
  background-color: #ffffff9c;
  border-radius: 5px;
  margin: 3%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:active {
    background-color: ${color.COLOR_BLUE_AUTH_BUTTON};
    color: white;
    transition: 0.4s;
  }
`;
