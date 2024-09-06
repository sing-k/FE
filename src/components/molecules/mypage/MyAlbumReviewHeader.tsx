import styled from "styled-components";
import { MyDeleteBtn, MyIcon } from "../../atoms";
import { Text } from "../../common";
import color from "../../../styles/color";
import IconImage from "../../../assets/img/singk-logo.png";
import { Image } from "../../../types/myAlbumReviewType";
interface AlbumReviewHeaderType {
  albumImage: Image;
  albumName: string;
  artistName: string;
  createdAt: string;
}

const MyAlbumReviewHeader = ({
  albumImage,
  albumName,
  artistName,
  createdAt,
}: AlbumReviewHeaderType) => {
  return (
    <Container>
      {albumImage ? (
        <MyIcon src={albumImage.imageUrl} $rounded={false} />
      ) : (
        <IconImage />
      )}
      <TitleDiv>
        <Text color="black" size="1rem" bold="700">
          {albumName}
        </Text>
        <Text color={color.COLOR_GRAY_TEXT} size="0.7rem">
          {artistName}
        </Text>
      </TitleDiv>
      <ColumnDiv>
        <Text color={color.COLOR_GRAY_TEXT} size="0.7rem">
          {createdAt}
        </Text>
        <MyDeleteBtn />
      </ColumnDiv>
    </Container>
  );
};

export default MyAlbumReviewHeader;

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
`;
const TitleDiv = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: start;
`;
const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 0.2rem;
`;
