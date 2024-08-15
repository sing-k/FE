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

const MainPage = () => {
  const { isPc } = useMediaQueries();
  const { data, isLoading, isError, error } = useAlbumListQuery("averageScore");

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;
  if (!data) return;

  return (
    <>
      <AlbumContainer>
        <TextWrapper>
          <FaMusic />
          <Text>평점 높은 앨범</Text>
          <FaStar />
        </TextWrapper>

        <AlbumCarousel items={data} />
      </AlbumContainer>

      <PostListWrapper style={isPc ? { flexDirection: "row" } : {}}>
        {/* 자유게시글, 음악추천게시글 목록 */}
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

const AlbumContainer = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 10px;
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
