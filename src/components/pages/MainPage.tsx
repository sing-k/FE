import styled from "styled-components";

import { AlbumCard } from "../molecules";
import { HomePostList } from "../organisms";

const MainPage = () => {
  return (
    <Container>
      <AlbumCard />

      <PostListWrapper>
        <HomePostList text="자유 게시판" />
        <HomePostList text="음악 추천 게시판" />
      </PostListWrapper>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;

const PostListWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
