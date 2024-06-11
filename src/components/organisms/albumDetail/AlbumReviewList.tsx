import { useEffect, useState } from "react";

import styled from "styled-components";

import { useLocation, useNavigate } from "react-router-dom";

import { glassEffectStyle } from "../../../styles/style";
import AlbumDetailTab from "../../molecules/albumDetail/AlbumDetailTab";
import AlbumReview from "../../molecules/albumDetail/AlbumReview";

const filterObj = {
  recent: "최신순",
  liked: "공감순",
} as const;

type FilterKey = keyof typeof filterObj;

const AlbumReviewList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentFilter, setCurrentFilter] = useState<FilterKey | "">("");

  const onClickTab = (key?: string) => {
    const path =
      `${location.pathname}?tab=review` +
      (key === "liked" ? "&filter=liked" : "");

    navigate(`${path}`);
  };

  useEffect(() => {
    const currentFilter = new URLSearchParams(location.search).get("filter");

    if (currentFilter) {
      setCurrentFilter("liked");
    } else {
      setCurrentFilter("recent");
    }
  }, [location]);

  if (currentFilter === "") return;

  return (
    <div style={{ borderRadius: "inherit" }}>
      <AlbumDetailTab
        tabObj={filterObj}
        currentTab={currentFilter}
        onClickTab={onClickTab}
      />

      <Container>
        {[...Array(10)].map((_, idx) => (
          <AlbumReview key={`review${idx}`} />
        ))}
      </Container>
    </div>
  );
};

export default AlbumReviewList;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  border-radius: inherit;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
