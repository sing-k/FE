import styled from "styled-components";

import { HomePostList } from "../organisms";
import { AlbumCarousel } from "../organisms/album";

import { useMediaQueries } from "../../hooks";

import { Outlet } from "react-router-dom";

const MainPage = () => {
  const { isPc } = useMediaQueries();

  return (
    <>
      <AlbumCarousel />

      <PostListWrapper style={isPc ? { flexDirection: "row" } : {}}>
        <HomePostList text="음악 추천 게시판" />
        <HomePostList text="자유 게시판" />
      </PostListWrapper>

      <Outlet />
    </>
  );
};

export default MainPage;

const PostListWrapper = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
`;
