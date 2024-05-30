import { useState } from "react";

import { useParams } from "react-router-dom";

import { MainLayout } from "../common";
import AlbumDetailTab from "../molecules/albumDetail/AlbumDetailTab";

const tabObj = {
  info: "기본 정보",
  review: "감상평",
} as const;

type TabKey = keyof typeof tabObj;

const AlbumDetailPage = () => {
  const { id } = useParams();

  const [currentTab, setCurrentTab] = useState<TabKey | string>("info");

  console.log("album id: ", id, currentTab);

  return (
    <MainLayout>
      <AlbumDetailTab
        tabObj={tabObj}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
    </MainLayout>
  );
};

export default AlbumDetailPage;
