import BoardListTemplate from "../templates/board/BoardListTemplate";
import PostSelection from "../atoms/post/PostSelection";
import Input from "../common/Input";
import styled from "styled-components";
import { TbMusicSearch } from "react-icons/tb";
import RecommendCard from "../molecules/recommendBoard/RecommendBoardCard";

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
      <CardContainer>
        <RecommendCard />
        <RecommendCard />
        <RecommendCard />
        <RecommendCard />
        <RecommendCard />
        <RecommendCard />
      </CardContainer>
    </BoardListTemplate>
  );
};

export default MusicRecommendationBoardPage;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem; /* Optional: add some space between elements */
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem; /* Space between cards */

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 0.5rem;
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
    overflow-x: hidden;
    gap: 1rem;
  }
`;
