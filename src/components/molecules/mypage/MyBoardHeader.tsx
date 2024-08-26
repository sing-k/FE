import styled from "styled-components";
import { MyDeleteBtn } from "../../atoms";
import { Text } from "../../common";
import color from "../../../styles/color";
import { FaUser } from "react-icons/fa";
type MyBoardHeaderProps = {
  showDeleteBtn?: boolean;
  nickname: string;
  createdAt: string;
  imageUrl?: string | null;
};

const MyBoardHeader = ({
  nickname,
  createdAt,
  imageUrl,
  showDeleteBtn = true,
}: MyBoardHeaderProps) => {
  return (
    <Container>
      <TitleDiv>
        {imageUrl ? <Img src={imageUrl} /> : <ImgIcon />}
        <Text color={color.COLOR_DARKGRAY_TEXT} size="1rem" bold="700">
          {nickname}
        </Text>
      </TitleDiv>
      <ColumnDiv>
        <Text color={color.COLOR_GRAY_TEXT} size="0.7rem">
          {createdAt}
        </Text>
        {showDeleteBtn && <MyDeleteBtn />}
      </ColumnDiv>
    </Container>
  );
};

export default MyBoardHeader;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
  padding: 0 0.5rem;
`;

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 0.5rem;
`;
const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 0.2rem;
`;

const Img = styled.img`
  object-fit: cover;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
`;

const ImgIcon = styled(FaUser)`
  color: white;
`;
