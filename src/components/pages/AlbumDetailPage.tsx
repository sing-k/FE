import { useState } from "react";

import { useParams } from "react-router-dom";

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
  console.log(id);

  const [currentTab, setCurrentTab] = useState<TabKey | string>("info");

  return (
    <MainLayout>
      <AlbumDetailTab
        tabObj={tabObj}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      {currentTab === "info" ? <AlbumDetailInfo /> : <AlbumDetailReview />}
    </MainLayout>
  );
};

export default AlbumDetailPage;
