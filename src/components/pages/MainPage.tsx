import styled from "styled-components";

import { glassEffectStyle } from "../../styles/style";
import color from "../../styles/color";

import { Outlet } from "react-router-dom";

import { FaStar, FaMusic } from "react-icons/fa";

import { useMediaQueries } from "../../hooks";
import { useAlbumListQuery } from "../../hooks/queries/album";

import { AlbumCarousel } from "../organisms/album";
import Loading from "../common/Loading";
import ErrorMessage from "../common/ErrorMessage";
import HomeFreePostList from "../organisms/home/HomeFreePostList";
import HomeRecommendPostList from "../organisms/home/HomeRecommendPostList";

const MainPage = () => {
  const { isPc } = useMediaQueries();
  const { data, isLoading, isError, error } = useAlbumListQuery("averageScore");

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;
  if (!data) return;

  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <FaMusic />
          <Text>평점 높은 앨범</Text>
          <FaStar />
        </TextWrapper>

        <AlbumCarousel items={data} />
      </Wrapper>

      <Wrapper style={{ flexDirection: isPc ? "row" : "column" }}>
        {/* 자유게시글, 음악추천게시글 목록 */}
        <HomeRecommendPostList />

        <HomeFreePostList />
      </Wrapper>

      <Outlet />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Wrapper = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${color.COLOR_MAIN};
  font-size: 1.2rem;
  gap: 0.5rem;
`;

const Text = styled.p`
  font-weight: bold;
  color: black;
`;
