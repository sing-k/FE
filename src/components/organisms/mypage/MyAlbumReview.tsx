import styled from "styled-components";
import { MyAlbumReviewHeader, MyAlbumReviewFooter } from "../../molecules";
import { Text } from "../../common";
import { glassEffectStyle } from "../../../styles/style";
const MyAlbumReview = () => {
  return (
    <Container>
      <Card>
        <MyAlbumReviewHeader />
        <Text size="1rem">
          이 앨범은
          킹갓제너럴엠페러마제스티골져스프레셔스뷰리풀하이클래스엘레강스럭셔리클래식지니어스원더풀러블리월드탑클래스입니다.
          감사합니다
        </Text>
        <MyAlbumReviewFooter />
      </Card>
      <Card>
        <MyAlbumReviewHeader />
        <Text size="1rem">
          이 앨범은
          킹갓제너럴엠페러마제스티골져스프레셔스뷰리풀하이클래스엘레강스럭셔리클래식지니어스원더풀러블리월드탑클래스입니다.
          감사합니다
        </Text>
        <MyAlbumReviewFooter />
      </Card>
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
`;
