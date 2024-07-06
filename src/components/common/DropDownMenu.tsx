import React from "react";

import styled from "styled-components";
import color from "../../styles/color";

type MenuItemType = {
  text: string;
  handleClickItem?: () => void;
};

type Props = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menuList: MenuItemType[];
};

const DropDownMenu = ({ openMenu, setOpenMenu, menuList }: Props) => {
  if (!menuList || menuList.length === 0) return;

  return (
    <Container>
      {menuList.map((item) => (
        <Item key={item.text} onClick={item.handleClickItem}>
          {item.text}
        </Item>
      ))}
    </Container>
  );
};

export default DropDownMenu;

const Container = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 100;
  width: 120px;
  padding: 0.5rem;
  background-color: white;
  border: 1px solid ${color.COLOR_LIGHTGRAY_BORDER};
  border-radius: 5px;
  box-shadow: 5px 5px 10px 0 ${color.COLOR_BOX_SHADOW_COLOR};
`;

const Item = styled.div`
  width: 100%;
  font-size: 0.9rem;
  color: ${color.COLOR_GRAY_TEXT};
  font-weight: 600;
  padding: inherit;
  cursor: pointer;
  border-radius: inherit;

  &:hover {
    background-color: #f0f0f0;
  }
`;
