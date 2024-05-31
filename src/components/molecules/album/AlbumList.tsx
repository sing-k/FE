import styled from "styled-components";
import {
  AlbumNameList,
  ArtistName,
  AlbumRating,
  AlbumRatingNum,
} from "../../atoms";

type Props = {
  isPc?: boolean;
  data?: any;
};

const AlbumList = ({ data }: Props) => {
  return (
    <Container>
      <Image src={data.images[0].imageUrl} alt={data.name} />
      <LayOut>
        <div>
          <AlbumNameList data={data} />
          <ArtistName data={data} />
        </div>
        <div>
          <AlbumRating />
          <AlbumRatingNum />
          <Button>평가하기</Button>
        </div>
      </LayOut>
    </Container>
  );
};

export default AlbumList;
//style={{ flexDirection: isPc ? "row" : "column" }
const Container = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 0.7rem;
  cursor: pointer;
  gap: 1rem;
`;
const Image = styled.img`
  width: 10%;
  aspect-ratio: 1 / 1;
`;
const LayOut = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;
const Button = styled.button`
  /* font-size: 0.8rem; */
  font-size: 1vw;
  font-weight: 700;
  border-radius: 20px;
  padding: 0.4rem 1.2rem;
  white-space: nowrap;
  background-color: transparent;
  color: white;
  border: 1px solid white;

  &:hover {
    cursor: pointer;
  }
`;
