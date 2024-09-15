import styled from "styled-components";
import { MyDeleteBtn } from "../../atoms";
import { Text } from "../../common";
import color from "../../../styles/color";
import UserInfo from "../../common/UserInfo";
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
  showDeleteBtn = false,
}: MyBoardHeaderProps) => {
  return (
    <Container>
      <UserInfo profileImage={imageUrl} nickname={nickname} />
      <ColumnDiv>
        <Text color={color.COLOR_GRAY_TEXT} size="0.5rem">
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
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
`;
const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: end; */
  gap: 0.2rem;
`;
