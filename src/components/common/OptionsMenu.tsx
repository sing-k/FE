import { useMemo, useState } from "react";

import styled from "styled-components";
import color from "../../styles/color";

import { BsThreeDotsVertical } from "react-icons/bs";

import { useMemberInfoQuery } from "../../hooks/queries/user";

import DropDownMenu, { MenuItemType } from "./DropDownMenu";

type Props = {
  writerId: string;
  handleUpdate?: () => void;
  handleDelete?: () => void;
  extraMenuList?: MenuItemType[];
};

const OptionsMenu = ({
  writerId,
  handleDelete,
  handleUpdate,
  extraMenuList = [],
}: Props) => {
  const { data } = useMemberInfoQuery();

  // 로그아웃 상태이거나 본인이 작성한 것이 아니면 보이지 않음
  if (!data || String(writerId) != String(data.id)) return;

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const menuList: MenuItemType[] = useMemo(() => {
    let ret: MenuItemType[] = [];

    if (handleUpdate) {
      ret.push({
        text: "수정",
        handleClickItem: handleUpdate,
      });
    }

    if (handleDelete) {
      ret.push({
        text: "삭제",
        handleClickItem: handleDelete,
      });
    }

    if (extraMenuList.length > 0) {
      ret = [...ret, ...extraMenuList];
    }

    return ret;
  }, [writerId, handleDelete, handleUpdate, extraMenuList]);

  const onClickDots = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Container>
      <Dots onClick={onClickDots} />

      {openMenu && (
        <DropDownMenu
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          menuList={menuList}
        />
      )}
    </Container>
  );
};

export default OptionsMenu;

const Container = styled.div`
  position: relative;
`;

const Dots = styled(BsThreeDotsVertical)`
  cursor: pointer;
  color: ${color.COLOR_GRAY_TEXT};
`;
