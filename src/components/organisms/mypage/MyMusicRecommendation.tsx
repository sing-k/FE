import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQueries } from "../../../hooks";
import styled from "styled-components";
import { MyMusicHeader, MyMusicFooter, MyBoardHeader } from "../../molecules";
import { glassEffectStyle } from "../../../styles/style";
import { useInfiniteMyRecommendPostsQuery } from "../../../hooks/queries/recommendPost";
import InfiniteScrollList from "../../common/InfiniteScrollList";
import Loading from "../../common/Loading";
import ErrorMessage from "../../common/ErrorMessage";
import EmptyMessage from "../../common/EmptyMessage";
import { RecommendPostType } from "../../../types/recommendPostType";
import { pathName } from "../../../App";
import RecommendThumbnail from "../../atoms/recommendBoard/RecommendThumbnail";

const MyMusicRecommendation = () => {
  const result = useInfiniteMyRecommendPostsQuery();
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = result;
  const navigate = useNavigate();
  const { isPc, isTablet } = useMediaQueries();

  const cols = isPc ? 3 : isTablet ? 2 : 1;
  useEffect(() => {
    if (!isLoading && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isLoading]);

  if (isLoading || !data) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;

  const handleClickLink = (id: string) => {
    navigate(`${pathName.musicRecommendationBoard}/${id}`);
  };
  return (
    <Container>
      {data.pages[0].length > 0 ? (
        <InfiniteScrollList
          queryResult={result}
          ItemComponent={({ data }: { data: RecommendPostType }) => (
            <Card key={data.id} onClick={() => handleClickLink(data.id)}>
              <ThumbnailContainer>
                <RecommendThumbnail
                  link={data.link}
                  recommend={data.recommend}
                />
              </ThumbnailContainer>
              <MiddleDiv>
                <MyMusicHeader title={data.title} recommend={data.recommend} />
                <MyBoardHeader
                  nickname={data.writer.nickname}
                  createdAt={data.createdAt}
                />
                <MyMusicFooter
                  genre={data.genre}
                  likeCount={data.like.count}
                  commentCount={data.comments}
                />
              </MiddleDiv>
            </Card>
          )}
          containerStyle={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: "1rem",
            background: "none",
            backdropFilter: "none",
            maxHeight: "80vh",
          }}
        />
      ) : (
        <EmptyMessage message={"추천된 게시글이 없습니다."} />
      )}
    </Container>
  );
};

export default MyMusicRecommendation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 5px;
`;

const Card = styled.div`
  ${glassEffectStyle()}
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: white;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px 5px 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const MiddleDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 0.5rem;
`;
