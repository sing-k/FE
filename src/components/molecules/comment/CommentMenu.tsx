import { useState } from "react";

import styled from "styled-components";
import color from "../../../styles/color";

import { BsThreeDotsVertical } from "react-icons/bs";

import DropDownMenu from "../../common/DropDownMenu";

const CommentMenu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const onClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleClickUpdate = () => {
    setOpenMenu(false);
  };

  const handleClickDelete = () => {
    const result = window.confirm("댓글을 삭제하시겠습니까?");

    if (result) {
      // 삭제 로직
    }

    setOpenMenu(false);
  };

  return (
    <Container>
      <Dots onClick={onClick} />

      {openMenu && (
        <DropDownMenu
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          menuList={[
            {
              text: "수정",
              handleClickItem: handleClickUpdate,
            },
            {
              text: "삭제",
              handleClickItem: handleClickDelete,
            },
          ]}
        />
      )}
    </Container>
  );
};

export default CommentMenu;

const Container = styled.div`
  position: relative;
`;

const Dots = styled(BsThreeDotsVertical)`
  cursor: pointer;
  color: ${color.COLOR_GRAY_TEXT};
`;
