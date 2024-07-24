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
  ProfileEditModal,
  MyActivityHistory,
} from "../organisms";
import { pathName } from "../../App";
import useModal from "../../hooks/useModal";
import { useMediaQueries } from "../../hooks";

const tabObj = {
  activityHistory: "활동 히스토리",
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
  const [currentTab, setCurrentTab] = useState<TabKey | string>(
    "activityHistory",
  );
  const { isOpen, openModal, closeModal } = useModal();
  const { isMobile } = useMediaQueries();
  const onClickTab = (key?: string) => {
    const path = `?tab=${key}`;
    navigate(`${pathName.myPage}/${path}`);
  };

  useEffect(() => {
    const currentTab = new URLSearchParams(location.search).get("tab");

    if (currentTab) {
      setCurrentTab(currentTab);
    } else {
      setCurrentTab("activityHistory");
    }
  }, [location]);

  if (currentTab === "") return null;

  return (
    <Container>
      <MyInfo data={data} openModal={openModal} />
      <TabContainer $isMobile={isMobile}>
        <MyPageTabMenu
          tabObj={tabObj}
          currentTab={currentTab}
          onClickTab={onClickTab}
        />
      </TabContainer>
      <ContentContainer>
        {currentTab === "activityHistory" && <MyActivityHistory />}
        {currentTab === "albumReview" && <MyAlbumReview />}
        {currentTab === "recommendMusic" && <MyMusicRecommendation />}
        {currentTab === "freeBoard" && <MyFreeBoard />}
        {currentTab === "comment" && <MyComment />}
      </ContentContainer>
      <ProfileEditModal
        userData={data}
        isOpen={isOpen}
        closeModal={closeModal}
      />
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
const TabContainer = styled.div<{ $isMobile: boolean }>`
  ${glassEffectStyle()}
  width: 100%;
  border-radius: ${({ $isMobile }) => ($isMobile ? "10px" : "50px")};
  padding: 0.5rem;
`;
const ContentContainer = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  border-radius: 10px;
  padding: 2rem;
`;
