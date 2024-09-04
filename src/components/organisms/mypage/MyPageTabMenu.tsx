import styled from "styled-components";
import color from "../../../styles/color";

type TabObjType = {
  [key: string]: string;
};

type Props = {
  tabObj: TabObjType;
  currentTab: string;
  onClickTab: (key?: string) => void;
};

const MyPageTabMenu = ({ tabObj, currentTab, onClickTab }: Props) => {
  //각 탭 옆에 숫자 추가
  return (
    <>
      <Container>
        {Object.keys(tabObj).map(key => (
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

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Tab = styled.div`
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  background-color: ${color.COLOR_WHITE_BACKGROUND};
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: bold;
  border: 1px solid ${color.COLOR_MAIN};
  color: ${color.COLOR_DARKGRAY_TEXT};
  &.active {
    background-color: ${color.COLOR_MAIN};
    color: white;
    transition: 0.3s;
  }
  > span {
    color: ${color.COLOR_LIGHT_GRAY_PLACEHOLDER};
  }
`;

export default MyPageTabMenu;
