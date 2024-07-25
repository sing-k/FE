import BoardListTemplate from "../templates/board/BoardListTemplate";
import PostSelection from "../atoms/post/PostSelection";
import Input from "../common/Input";
import styled from "styled-components";
import { TbMusicSearch } from "react-icons/tb";
import RecommendCard from "../molecules/recommendBoard/RecommendBoardCard";
import MyMusicRecommendation from "../organisms/mypage/MyMusicRecommendation";
import { MyMusicHeader, MyMusicFooter, MyBoardHeader } from "../molecules/";
import { MyThumbnailImg } from "../atoms/mypage/index";
import Thumbnail from "../../assets/img/singk-logo.png";
import { glassEffectStyle } from "../../styles/style";

const MusicRecommendationBoardPage = () => {
  return (
    <BoardListTemplate>
      <Container>
        <PostSelection />
        <Input
          width="0.2rem"
          placeholder="검색어 입력"
          button={{
            icon: <TbMusicSearch size="1.2rem" />,
          }}
        />
      </Container>
      <BottomContainer>
        <Card>
          <MyThumbnailImg src={Thumbnail} type="text" />
          <MyMusicHeader />
          <MyBoardHeader showDeleteBtn={false} />
          <MyMusicFooter />
        </Card>
        <Card>
          <MyThumbnailImg src={Thumbnail} type="youtube" />
          <MyMusicHeader />
          <MyBoardHeader showDeleteBtn={false} />
          <MyMusicFooter />
        </Card>
        <Card>
          <MyThumbnailImg src={Thumbnail} type="youtube" />
          <MyMusicHeader />
          <MyBoardHeader showDeleteBtn={false} />
          <MyMusicFooter />
        </Card>
        <Card>
          <MyThumbnailImg src={Thumbnail} type="youtube" />
          <MyMusicHeader />
          <MyBoardHeader showDeleteBtn={false} />
          <MyMusicFooter />
        </Card>
      </BottomContainer>
    </BoardListTemplate>
  );
};

export default MusicRecommendationBoardPage;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem; /* Optional: add some space between elements */
`;

const BottomContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  justify-content: center; /* Center the grid items */
  padding: 0;
`;

const Card = styled.div`
  ${glassEffectStyle()}
  min-width: 280px;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0.5rem;
  justify-content: center;
`;
