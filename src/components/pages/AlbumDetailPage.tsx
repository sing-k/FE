import { useEffect, useState } from "react";

import styled from "styled-components";
import color from "../../styles/color";

import { useParams, useLocation, useNavigate } from "react-router-dom";

import AlbumDetailInfo from "../organisms/albumDetail/AlbumDetailInfo";
import AlbumDetailReview from "../organisms/albumDetail/AlbumDetailReview";
import TabMenu from "../common/TabMenu";

import { pathName } from "../../App";
import { getLoginState } from "../../utils/auth/tokenStorage";

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
    navigate(`${pathName.albumDetail}/${id}${path}`);
  };

  const onClickWriteRecommend = () => {
    if (confirm("해당 앨범으로 음악 추천 게시글을 작성하시겠습니까?")) {
      navigate(`${pathName.musicRecommendationPost}?albumId=${id}`);
    }
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
      <TabWrapper>
        <TabMenu
          tabObj={tabObj}
          currentTab={currentTab}
          onClickTab={onClickTab}
        />

        {getLoginState() && (
          <WriteBtn onClick={onClickWriteRecommend}>추천 글쓰기</WriteBtn>
        )}
      </TabWrapper>

      {currentTab === "info" && <AlbumDetailInfo albumId={id as string} />}
      {currentTab === "review" && <AlbumDetailReview albumId={id as string} />}
    </>
  );
};

export default AlbumDetailPage;

const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WriteBtn = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  background-color: ${color.COLOR_MAIN};
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  cursor: pointer;
`;
