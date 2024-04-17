import styled from "styled-components";

import { MainLayout } from "../common";
import { AlbumCard } from "../molecules";
import { HomePostList } from "../organisms";

import { useMediaQueries } from "../../hooks";

const MainPage = () => {
  const { isPc } = useMediaQueries();

  return (
    <MainLayout>
      <AlbumCard />

      <PostListWrapper style={isPc ? { flexDirection: "row" } : {}}>
        <HomePostList text="음악 추천 게시판" />
        <HomePostList text="자유 게시판" />
      </PostListWrapper>
    </MainLayout>
  );
};

export default MainPage;

const PostListWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;
