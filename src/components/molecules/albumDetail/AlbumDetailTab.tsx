import styled from "styled-components";

import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";

type TabObjType = {
  [key: string]: string;
};

type Props = {
  tabObj: TabObjType;
  currentTab: string;
  onClickTab: (key?: string) => void;
};

const AlbumDetailTab = ({ tabObj, currentTab, onClickTab }: Props) => {
  return (
    <>
      <Container>
        {Object.keys(tabObj).map((key) => (
          <Tab
            key={key}
            className={key === currentTab ? "active" : "none"}
            onClick={onClickTab.bind(this, key)}
          >
            {tabObj[key]}
          </Tab>
        ))}
      </Container>
    </>
  );
};

export default AlbumDetailTab;

const Container = styled.div`
  ${glassEffectStyle()}
  width: max-content;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
`;

const Tab = styled.div`
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  background-color: ${color.COLOR_WHITE_BACKGROUND};
  border-radius: inherit;
  font-size: 0.8rem;
  font-weight: bold;

  &.active {
    background-color: ${color.COLOR_MAIN};
    color: white;
  }
`;
