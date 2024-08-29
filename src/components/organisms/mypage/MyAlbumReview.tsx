import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MyAlbumReviewHeader, MyAlbumReviewFooter } from "../../molecules";
import { Text } from "../../common";
import { glassEffectStyle } from "../../../styles/style";
import { AlbumReview } from "../../../types/myalbumReviewType";
import { useMyAlbumReviewsQuery } from "../../../hooks/queries/albumDetail";
import Loading from "../../common/Loading";
import ErrorMessage from "../../common/ErrorMessage";
import { pathName } from "../../../App";
const MyAlbumReview = () => {
  const { data, isLoading, isError, error } = useMyAlbumReviewsQuery(0, 20);
  const navigate = useNavigate();
  if (isLoading || !data) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;

  const handelClickLink = (id: string) => {
    navigate(`${pathName.albumDetail}/${id}/?tab=review`);
  };
  console.log(data);
  return (
    <Container>
      {data.items.map((review: AlbumReview) => (
        <Card key={review.id} onClick={() => handelClickLink(review.album.id)}>
          <MyAlbumReviewHeader
            albumImage={review.album.images[0]}
            albumName={review.album.name}
            artistName={review.album.artists
              .map(artist => artist.name)
              .join(", ")}
            createdAt={review.createdAt}
          />
          <Text size="1rem">{review.content}</Text>
          <MyAlbumReviewFooter
            prosCount={review.vote.prosCount}
            consCount={review.vote.consCount}
            score={review.score}
          />
        </Card>
      ))}
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
