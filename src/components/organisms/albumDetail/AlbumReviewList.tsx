import { useEffect, useState } from "react";

import styled from "styled-components";

import { useLocation, useNavigate } from "react-router-dom";

import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";

import { useAlbumReviewListQuery } from "../../../hooks/queries/albumDetail";

import { AlbumReviewType } from "../../../types/albumReviewType";

import AlbumReview from "../../molecules/albumDetail/AlbumReview";
import TabMenu from "../../common/TabMenu";
import Loading from "../../common/Loading";
import ErrorMessage from "../../common/ErrorMessage";

const filterObj = {
  recent: "최신순",
  liked: "공감순",
} as const;

type FilterKey = keyof typeof filterObj;

type Props = {
  albumId: string;
};

const AlbumReviewList = ({ albumId }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentFilter, setCurrentFilter] = useState<FilterKey | "">("");

  const { data, isLoading, isError, error } = useAlbumReviewListQuery({
    albumId,
    offset: 0,
    limit: 10,
    sort: currentFilter === "recent" ? "NEW" : "LIKES",
  });

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
  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;

  return (
    <div style={{ borderRadius: "inherit" }}>
      <TabMenu
        tabObj={filterObj}
        currentTab={currentFilter}
        onClickTab={onClickTab}
      />

      <Container>
        {data && data?.items.length === 0 ? (
          <EmptyText>등록된 감상평이 없습니다.</EmptyText>
        ) : (
          <>
            {data?.items.map((data: AlbumReviewType) => (
              <AlbumReview key={`review${data.id}`} data={data} />
            ))}
          </>
        )}
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

const EmptyText = styled.div`
  color: ${color.COLOR_GRAY_TEXT};
  font-size: 0.9rem;
  text-align: center;
  padding: 2rem 0;
`;
