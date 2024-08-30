import styled from "styled-components";

import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { glassEffectStyle } from "../../../styles/style";
import { pathName } from "../../../App";

import { useInfiniteSearchAlbumListQuery } from "../../../hooks/queries/album";

import AlbumCarousel from "./AlbumCarousel";
import AlbumItem from "../../molecules/album/AlbumItem";
import Loading from "../../common/Loading";
import ErrorMessage from "../../common/ErrorMessage";
import EmptyMessage from "../../common/EmptyMessage";
import InfiniteScrollList from "../../common/InfiniteScrollList";
import { useEffect } from "react";

type Props = {
  query: string;
};

const AlbumSearchList = ({ query }: Props) => {
  const queryResult = useInfiniteSearchAlbumListQuery(query);
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = queryResult;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${pathName.album}`);
  };

  useEffect(() => {
    if (!isLoading && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isLoading]);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;
  if (!data) return;

  return (
    <Container>
      <SearchTitle>
        <BackBtn onClick={handleClick} />'{query}'에 대한 검색 결과
      </SearchTitle>

      {data.pages.length > 0 ? (
        <>
          <AlbumCarousel items={data.pages[0]} />

          {data.pages.length > 1 && (
            <InfiniteScrollList
              queryResult={queryResult}
              ItemComponent={AlbumItem}
              itemProps={{ type: "list" }}
              containerStyle={{
                background: "none",
                backdropFilter: "none",
                maxHeight: "60vh",
              }}
            />
          )}
        </>
      ) : (
        <EmptyMessage message={`'${query}' 에 대한 검색 결과가 없습니다.`} />
      )}
    </Container>
  );
};

export default AlbumSearchList;

const Container = styled.div`
  ${glassEffectStyle()}
  margin-top: 2rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 10px;
`;

const SearchTitle = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const BackBtn = styled(FaArrowLeft)`
  cursor: pointer;
  font-size: 1.2rem;
`;
