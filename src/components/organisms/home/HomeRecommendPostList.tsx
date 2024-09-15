import styled from "styled-components";

import { useMediaQueries } from "../../../hooks";
import { useHomeRecommendPostListQuery } from "../../../hooks/queries/recommendPost";

import HomePostListTemplate from "../../templates/home/HomePostListTemplate";
import Loading from "../../common/Loading";
import ErrorMessage from "../../common/ErrorMessage";
import EmptyMessage from "../../common/EmptyMessage";
import RecommendBoardItem from "../../molecules/recommendBoard/RecommendBoardItem";

const HomeRecommendPostList = () => {
  const { isTablet } = useMediaQueries();

  const { data, isLoading, isError, error } = useHomeRecommendPostListQuery();

  const numOfCols = isTablet ? 3 : 2;

  return (
    <HomePostListTemplate listHeaderText="음악 추천 게시판">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorMessage message={error.message} />
      ) : (
        data &&
        (data.length === 0 ? (
          <EmptyMessage message="음악 추천 게시글이 없습니다." />
        ) : (
          <Container
            style={{ gridTemplateColumns: `repeat(${numOfCols}, 1fr)` }}
          >
            {data.map((recommendPost) => (
              <RecommendBoardItem key={recommendPost.id} data={recommendPost} />
            ))}
          </Container>
        ))
      )}
    </HomePostListTemplate>
  );
};

export default HomeRecommendPostList;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;
