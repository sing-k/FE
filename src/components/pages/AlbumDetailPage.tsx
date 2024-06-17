import { useEffect, useState } from "react";

import { useParams, useLocation, useNavigate } from "react-router-dom";

import AlbumDetailTab from "../molecules/albumDetail/AlbumDetailTab";
import AlbumDetailInfo from "../organisms/albumDetail/AlbumDetailInfo";
import AlbumDetailReview from "../organisms/albumDetail/AlbumDetailReview";

import { pathName } from "../../App";

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
    navigate(`${pathName.album}/${id}${path}`);
  };

  useEffect(() => {
    const currentTab = new URLSearchParams(location.search).get("tab");

    if (currentTab) {
      setCurrentTab("review");
    } else {
      setCurrentTab("info");
    }
  }, [location]);

  if (currentTab === "") return null;

  return (
    <>
      <AlbumDetailTab
        tabObj={tabObj}
        currentTab={currentTab}
        onClickTab={onClickTab}
      />

      {currentTab === "info" && <AlbumDetailInfo />}
      {currentTab === "review" && <AlbumDetailReview />}
    </>
  );
};

export default AlbumDetailPage;
