import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MyAlbumReviewHeader, MyAlbumReviewFooter } from "../../molecules";
import { Text } from "../../common";
import { glassEffectStyle } from "../../../styles/style";
import { AlbumReview, Artist } from "../../../types/myAlbumReviewType";
import { useInfiniteMyAlbumReviewsQuery } from "../../../hooks/queries/albumDetail";
import InfiniteScrollList from "../../common/InfiniteScrollList";
import Loading from "../../common/Loading";
import ErrorMessage from "../../common/ErrorMessage";
import { pathName } from "../../../App";
import EmptyMessage from "../../common/EmptyMessage";
const MyAlbumReview = () => {
  const result = useInfiniteMyAlbumReviewsQuery();
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

  useEffect(() => {
    if (!isLoading && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isLoading]);

  if (isLoading || !data) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;

  const handleClickLink = (id: string) => {
    navigate(`${pathName.albumDetail}/${id}/?tab=review`);
  };

  return (
    <Container>
      {data.pages[0].length > 0 ? (
        <InfiniteScrollList
          queryResult={result}
          ItemComponent={({ data }: { data: AlbumReview }) => (
            <Card key={data.id} onClick={() => handleClickLink(data.album.id)}>
              <MyAlbumReviewHeader
                albumImage={data.album.images[0]}
                albumName={data.album.name}
                artistName={data.album.artists
                  .map((artist: Artist) => artist.name)
                  .join(", ")}
                createdAt={data.createdAt}
              />
              <Text size="1rem">{data.content}</Text>
              <MyAlbumReviewFooter
                prosCount={data.vote.prosCount}
                consCount={data.vote.consCount}
                score={data.score}
              />
            </Card>
          )}
          containerStyle={{
            background: "none",
            backdropFilter: "none",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxHeight: "80vh",
          }}
          emptyMessage={"평가한 앨범이 없습니다."}
        />
      ) : (
        <EmptyMessage message={"평가한 앨범이 없습니다."} />
      )}
    </Container>
  );
};

export default MyAlbumReview;

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
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
