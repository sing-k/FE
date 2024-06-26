import styled from "styled-components";
import { Text } from "../../common";
import { MyBoardHeader, MyCommentFooter } from "../../molecules";
import { glassEffectStyle } from "../../../styles/style";
import color from "../../../styles/color";
const MyComment = () => {
  return (
    <Container>
      <Card>
        <MyBoardHeader />
        <Text color="black" size="1rem">
          댓글내용 댓글 내용 댓글 내용 댓글 내용
        </Text>
        <MyCommentFooter />
      </Card>
      <Card>
        <MyBoardHeader />
        <Text color="black" size="1rem">
          댓글내용 댓글 내용 댓글 내용 댓글 내용
        </Text>
        <MyCommentFooter />
      </Card>
    </Container>
  );
};

export default MyComment;

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
`;
