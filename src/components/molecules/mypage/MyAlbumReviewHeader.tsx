import styled from "styled-components";
import { MyDeleteBtn, MyIcon } from "../../atoms";
import { Text } from "../../common";
import color from "../../../styles/color";
import IconImage from "../../../assets/img/singk-logo.png";

const MyAlbumReviewHeader = () => {
  return (
    <Container>
      <MyIcon src={IconImage} rounded={false} />
      <TitleDiv>
        <Text color="black" size="1rem" bold="700">
          Discord(TAK Remix)
        </Text>
        <Text color={color.COLOR_GRAY_TEXT} size="0.7rem">
          QWER
        </Text>
      </TitleDiv>
      <ColumnDiv>
        <Text color={color.COLOR_GRAY_TEXT} size="0.7rem">
          2024.06.25
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
