import styled from "styled-components";
import { Text } from "../../common";
import { MyBoardHeader, MyFreeBoardFooter } from "../../molecules";
import { glassEffectStyle } from "../../../styles/style";
import color from "../../../styles/color";
const MyFreeBoard = () => {
  return (
    <Container>
      <Card>
        <MyBoardHeader />
        <Text color="black" size="1rem" bold={700}>
          제목제목제목제목제목
        </Text>
        <MyFreeBoardFooter />
      </Card>
      <Card>
        <MyBoardHeader />
        <Text color="black" size="1rem" bold={700}>
          제목제목제목제목제목
        </Text>
        <MyFreeBoardFooter />
      </Card>
    </Container>
  );
};

export default MyFreeBoard;

const Container = styled.div`
  ${glassEffectStyle()}
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 1rem;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid;
  border-image: linear-gradient(
      to right,
      ${color.COLOR_GRADIENT_PURPLE},
      ${color.COLOR_GRADIENT_PINK}
    )
    1;
`;
