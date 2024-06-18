import React, { useState } from "react";

import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";
import color from "../../../styles/color";

import { useLocation, useNavigate } from "react-router-dom";

import TabMenu from "../../common/TabMenu";

type Props = {
  children?: React.ReactNode;
};

const tabObj = {
  recent: "최신순",
  liked: "공감순",
} as const;

type TabKey = keyof typeof tabObj;

const BoardListTemplate = ({ children }: Props) => {
  const [currentTab, setCurrentTab] = useState<TabKey | string>("recent");

  const navigate = useNavigate();
  const location = useLocation();

  const onClickTab = (key?: string) => {
    if (!key) return;

    setCurrentTab(key);
  };

  const onClickWriteBtn = () => {
    navigate(`${location.pathname}/post`);
  };

  return (
    <Container>
      <TabWrapper>
        <TabMenu
          tabObj={tabObj}
          currentTab={currentTab}
          onClickTab={onClickTab}
        />

        <WriteBtn onClick={onClickWriteBtn}>글쓰기</WriteBtn>
      </TabWrapper>

      <ListWrapper>{children}</ListWrapper>
    </Container>
  );
};

export default BoardListTemplate;

const Container = styled.div`
  width: 100%;
`;

const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WriteBtn = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  background-color: ${color.COLOR_MAIN};
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  cursor: pointer;
`;

const ListWrapper = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  border-radius: 5px;
  padding: 1rem;
`;
