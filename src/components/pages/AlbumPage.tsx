import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { AlbumSearchList } from "../organisms/album";

import { pathName } from "../../App";

import AlbumSection from "../organisms/album/AlbumSection";

const AlbumPage = () => {
  const [query, setQuery] = useState<string | undefined>(undefined);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");

    if (query) {
      setQuery(query);
    } else {
      setQuery(undefined);
    }
  }, [location.search]);

  return (
    <>
      {query && <AlbumSearchList query={query} />}

      <AlbumSection
        title="최근 평가된 앨범"
        link={pathName.recentReview}
        albumType="recent"
      />
      <AlbumSection
        title="평가 많은 순"
        link={pathName.mostReview}
        albumType="reviewCount"
      />
      <AlbumSection
        title="평점 높은 순"
        link={pathName.highestRated}
        albumType="averageScore"
      />
    </>
  );
};

export default AlbumPage;
