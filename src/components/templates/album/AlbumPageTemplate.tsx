import React, { useEffect, useRef } from "react";

import styled from "styled-components";
import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";

import { IoArrowBack } from "react-icons/io5";

import { Link } from "react-router-dom";

import { AlbumRequestType } from "../../../api/album";
import { pathName } from "../../../App";

import { useInfiniteAlbumListQuery } from "../../../hooks/queries/album";

import AlbumItem from "../../molecules/album/AlbumItem";
import Loading from "../../common/Loading";
import ErrorMessage from "../../common/ErrorMessage";

type Props = {
  category: string;
  albumType: AlbumRequestType;
};

const AlbumPageTemplate = ({ category, albumType }: Props) => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteAlbumListQuery(albumType);

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { clientHeight, scrollHeight, scrollTop } = scrollRef.current;

    // 스크롤 마지막 도달 endReached
    if (clientHeight + scrollTop >= scrollHeight - 5) {
      if (hasNextPage && !isFetchingNextPage) {
        // 다음 페이지가 있고, 데이터 패칭 중이 아니라면
        fetchNextPage();
      }
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      handleScroll();
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [hasNextPage, fetchNextPage, isFetchingNextPage]);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;

  return (
    <Container>
      <Header>
        <BackBtn to={pathName.album}>
          <IoArrowBack />
        </BackBtn>
        <AlbumCategory>{category}</AlbumCategory>
      </Header>

      <CardContainer ref={scrollRef}>
        {data?.pages.map((page, idx) => (
          <React.Fragment key={idx}>
            {page.map((data) => (
              <AlbumItem key={data.id} data={data} type="card" />
            ))}
          </React.Fragment>
        ))}
      </CardContainer>

      {isFetchingNextPage && <Loading />}
    </Container>
  );
};

export default AlbumPageTemplate;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  padding: 1.5rem 1.5rem 3rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* 추가: BackBtn과 AlbumCategory 사이에 간격을 추가 */
`;

const AlbumCategory = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`;

const BackBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: ${color.COLOR_GRAY_TEXT};
  ${glassEffectStyle()}
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  transition: 0.4s;

  &:hover {
    background-color: ${color.COLOR_MAIN};
    color: white;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
`;
