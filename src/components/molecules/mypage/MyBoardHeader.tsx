import styled from "styled-components";
import { MyDeleteBtn, MyIcon } from "../../atoms";
import { Text } from "../../common";
import color from "../../../styles/color";
import IconImage from "../../../assets/img/singk-logo.png";

const MyBoardHeader = () => {
  return (
    <Container>
      <MyIcon src={IconImage} rounded={true} />
      <TitleDiv>
        <Text color={color.COLOR_DARKGRAY_TEXT} size="1rem" bold="700">
          킹연두
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

export default MyBoardHeader;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
