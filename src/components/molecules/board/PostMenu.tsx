import { useState } from "react";

import styled from "styled-components";
import color from "../../../styles/color";

import { FaCog } from "react-icons/fa";

import DropDownMenu from "../../common/DropDownMenu";

const PostMenu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const onClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleClickUpdate = () => {
    setOpenMenu(false);
  };

  const handleClickDelete = () => {
    const result = window.confirm("게시글을 삭제하시겠습니까?");

    if (result) {
      // 삭제 로직
    }

    setOpenMenu(false);
  };

  return (
    <Container>
      <EditBtn onClick={onClick} />

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

export default PostMenu;

const Container = styled.div`
  position: relative;
`;

const EditBtn = styled(FaCog)`
  cursor: pointer;
  color: ${color.COLOR_GRAY_TEXT};
`;
