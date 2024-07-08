import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useApi } from "../../hooks";

import { AlbumSearchList } from "../organisms/album";

import AlbumSection from "../organisms/album/AlbumSection";

import { AlbumType } from "../../types/albumType";
import { pathName } from "../../App";
import Loading from "../common/Loading";
const AlbumPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const { data, callApi, isLoading, statusCode } = useApi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (query) {
          await callApi(
            `/api/albums/search?query=${query}&offset=0&limit=20`,
            "get",
            // {
            //   headers,
            // }
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query]);
  if (query) {
    if (isLoading) return <Loading />;
    if (statusCode !== 200) return <p>Error loading albums</p>;
  }
  return (
    <>
      {query && data && (
        <AlbumSearchList
          query={query}
          data={data.items as AlbumType[]}
        ></AlbumSearchList>
      )}

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
