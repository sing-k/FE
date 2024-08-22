import styled from "styled-components";
import { MyDeleteBtn } from "../../atoms";
import { Text } from "../../common";
import color from "../../../styles/color";

type MyBoardHeaderProps = {
  showDeleteBtn?: boolean;
  nickname: string;
  createdAt: string;
};

const MyBoardHeader = ({
  nickname,
  createdAt,
  showDeleteBtn = true,
}: MyBoardHeaderProps) => {
  return (
    <Container>
      <TitleDiv>
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
`;

const TitleDiv = styled.div`
  width: 90%;
`;
const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 0.2rem;
`;
