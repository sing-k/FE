import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { MainLayout } from "../common";

import { useApi } from "../../hooks";

import { AlbumSearchList } from "../organisms/album";

import AlbumSection from "../organisms/album/AlbumSection";
const AlbumPage = () => {
  //   const { isPc } = useMediaQueries();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const { data, callApi, isLoading, statusCode } = useApi();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("accessToken");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      try {
        if (query) {
          await callApi(
            `/api/albums/search?query=${query}&offset=0&limit=20`,
            "get",
            {
              headers,
            }
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query]);
  if (query) {
    if (isLoading) return <p>Loading...</p>;
    if (statusCode !== 200) return <p>Error loading albums</p>;
  }
  return (
    <MainLayout>
      {query && data && (
        <AlbumSearchList query={query} data={data.items}></AlbumSearchList>
      )}
      <AlbumSection title="최근 평가된 앨범" link="/recentreview" />
      <AlbumSection title="평가 많은 순" link="/mostreview" />
      <AlbumSection title="평점 높은 순" link="/highestrated" />
    </MainLayout>
  );
};

export default AlbumPage;
