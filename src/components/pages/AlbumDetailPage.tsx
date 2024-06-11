import { useEffect, useState } from "react";

import { useParams, useLocation, useNavigate } from "react-router-dom";

import { MainLayout } from "../common";
import AlbumDetailTab from "../molecules/albumDetail/AlbumDetailTab";
import AlbumDetailInfo from "../organisms/albumDetail/AlbumDetailInfo";
import AlbumDetailReview from "../organisms/albumDetail/AlbumDetailReview";

const tabObj = {
  info: "기본 정보",
  review: "감상평",
} as const;

type TabKey = keyof typeof tabObj;

const AlbumDetailPage = () => {
  const { id } = useParams(); // 앨범 아이디
  const location = useLocation();
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState<TabKey | "">("");

  const onClickTab = (key?: string) => {
    const path = key === "review" ? "?tab=review" : "";
    navigate(`/album-detail/${id}${path}`);
  };

  useEffect(() => {
    const currentTab = new URLSearchParams(location.search).get("tab");

    if (currentTab) {
      setCurrentTab("review");
    } else {
      setCurrentTab("info");
    }
  }, [location]);

  if (currentTab === "") return;

  return (
    <MainLayout>
      <AlbumDetailTab
        tabObj={tabObj}
        currentTab={currentTab}
        onClickTab={onClickTab}
      />

      {currentTab === "info" && <AlbumDetailInfo />}
      {currentTab === "review" && <AlbumDetailReview />}
    </MainLayout>
  );
};

export default AlbumDetailPage;
