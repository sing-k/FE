import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { glassEffectStyle } from "../../styles/style";
import { useMemberInfoQuery } from "../../hooks/queries/user";
import {
  MyInfo,
  MyAlbumReview,
  MyMusicRecommendation,
  MyFreeBoard,
  MyComment,
  MyPageTabMenu,
} from "../organisms";
import { pathName } from "../../App";

// 마이페이지에서는 내 정보만 요청 일단
// (내 정보 요청 , 관련 데이터 요청 -> 탭에서 요청하기 )
// 1. 내 정보 컴포넌트
// 2. 탭 메뉴에 따라서 뿌려주는 컴포넌트 다르게 (앨범 디테일 페이지 참고 )
// 3. 내용 뿌려주는 컴포넌트 (각 컴포넌트 렌더링 될때 맞는 api 요청하면 될듯 ?)

const tabObj = {
  albumReview: "평가한앨범",
  recommendMusic: "음악추천글",
  freeBoard: "자유글",
  comment: "댓글",
} as const;

type TabKey = keyof typeof tabObj;

const Mypage = () => {
  const { data } = useMemberInfoQuery();
  const navigate = useNavigate();
  const location = useLocation();

  const [currentTab, setCurrentTab] = useState<TabKey | string>("albumReview");

  const onClickTab = (key?: string) => {
    const path = `?tab=${key}`;
    navigate(`${pathName.myPage}/${path}`);
  };

  useEffect(() => {
    const currentTab = new URLSearchParams(location.search).get("tab");

    if (currentTab) {
      setCurrentTab(currentTab);
    } else {
      setCurrentTab("albumReview");
    }
  }, [location]);

  if (currentTab === "") return null;
  return (
    <Container>
      <MyInfo data={data} />
      <TabContainer>
        <MyPageTabMenu
          tabObj={tabObj}
          currentTab={currentTab}
          onClickTab={onClickTab}
        />
      </TabContainer>
      <ContentContainer>
        {currentTab === "albumReview" && <MyAlbumReview />}
        {currentTab === "recommendMusic" && <MyMusicRecommendation />}
        {currentTab === "freeBoard" && <MyFreeBoard />}
        {currentTab === "comment" && <MyComment />}
      </ContentContainer>
    </Container>
  );
};

export default Mypage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const TabContainer = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  border-radius: 50px;
  padding: 0.5rem;
  flex-wrap: wrap;
`;
const ContentContainer = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  border-radius: 10px;
  padding: 2rem;
`;
