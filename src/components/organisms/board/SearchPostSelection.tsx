import React, { useState } from "react";

import styled from "styled-components";
import color from "../../../styles/color";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { PostFilterType, postFilterType } from "../../../types/postType";

import DropDownMenu from "../../common/DropDownMenu";

type Props = {
  filter: PostFilterType;
  setFilter: React.Dispatch<React.SetStateAction<PostFilterType>>;
};

const SearchPostSelection = ({ filter, setFilter }: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleClickItem = (selectedFilter: PostFilterType) => {
    setFilter(selectedFilter);
  };

  return (
    <Container>
      <MenuContainer onClick={() => setOpenMenu(!openMenu)}>
        <Menu>
          {postFilterType[filter]}
          {openMenu ? <FaChevronUp /> : <FaChevronDown />}
        </Menu>
      </MenuContainer>

      {openMenu && (
        <DropDownMenu
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          menuList={Object.keys(postFilterType).map((filter) => ({
            text: postFilterType[filter as PostFilterType],
            handleClickItem: () => handleClickItem(filter as PostFilterType),
          }))}
        />
      )}
    </Container>
  );
};

export default SearchPostSelection;

const Container = styled.div`
  position: relative;
`;

const MenuContainer = styled.div`
  border-radius: calc(1.15rem + 1.5px);
  border: 3px double #eeeeeeb1;
  box-shadow: 0px 0px 16px #eeeeee6e;
  overflow: hidden;
`;

const Menu = styled.div`
  background-color: white;
  padding: 0.4rem 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.9rem;
  cursor: pointer;
  color: ${color.COLOR_GRAY_TEXT};
`;
