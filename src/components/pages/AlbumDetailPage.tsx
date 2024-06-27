import { useEffect, useState } from "react";

import { useParams, useLocation, useNavigate } from "react-router-dom";

import AlbumDetailInfo from "../organisms/albumDetail/AlbumDetailInfo";
import AlbumDetailReview from "../organisms/albumDetail/AlbumDetailReview";
import TabMenu from "../common/TabMenu";

import { pathName } from "../../App";
import { useAlbumDetailQuery } from "../../hooks/queries/albumDetail";

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
  const { data, isLoading, isError, error } = useAlbumDetailQuery(id as string);

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

  if (isLoading) return <>로딩중 {"><"}</>;
  if (isError) return <>미친 에러 {error.message}</>;

  return (
    <>
      <TabMenu
        tabObj={tabObj}
        currentTab={currentTab}
        onClickTab={onClickTab}
      />

      {currentTab === "info" && data && <AlbumDetailInfo data={data} />}
      {currentTab === "review" && <AlbumDetailReview />}
    </>
  );
};

export default AlbumDetailPage;
