import styled from "styled-components";

import GlassBox from "../../common/GlassBox";
import React from "react";
import color from "../../../styles/color";

type TabObjType = {
  [key: string]: string;
};

type Props = {
  tabObj: TabObjType;
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
};

const AlbumDetailTab = ({ tabObj, currentTab, setCurrentTab }: Props) => {
  return (
    <GlassBox>
      <Container>
        {Object.keys(tabObj).map((key) => (
          <Tab
            className={key === currentTab ? "active" : "none"}
            onClick={setCurrentTab.bind(this, key)}
          >
            {tabObj[key]}
          </Tab>
        ))}
      </Container>
    </GlassBox>
  );
};

export default AlbumDetailTab;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Tab = styled.div`
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  background-color: ${color.COLOR_WHITE_BACKGROUND};
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: bold;

  &.active {
    background-color: ${color.COLOR_MAIN};
    color: white;
  }
`;
