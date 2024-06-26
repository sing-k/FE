import styled from "styled-components";
import { MyThumbnailImg } from "../../atoms";
import { MyMusicHeader, MyMusicFooter, MyBoardHeader } from "../../molecules";
import Thumbnail from "../../../assets/img/singk-logo.png";
import { glassEffectStyle } from "../../../styles/style";

const MyMusicRecommendation = () => {
  return (
    <OuterContainer>
      <Container>
        <Card>
          <MyThumbnailImg src={Thumbnail} type="youtube" />
          <MyMusicHeader />
          <MyBoardHeader />
          <MyMusicFooter />
        </Card>
        <Card>
          <MyThumbnailImg src={Thumbnail} />
          <MyMusicHeader />
          <MyBoardHeader />
          <MyMusicFooter />
        </Card>
        <Card>
          <MyThumbnailImg src={Thumbnail} />
          <MyMusicHeader />
          <MyBoardHeader />
          <MyMusicFooter />
        </Card>
      </Container>
    </OuterContainer>
  );
};

export default MyMusicRecommendation;

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Card = styled.div`
  ${glassEffectStyle()}
  width: 25%;
  min-width: 280px;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0.5rem;
`;