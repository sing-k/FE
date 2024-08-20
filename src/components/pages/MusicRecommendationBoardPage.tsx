import { useState } from "react";

import { TbMusicSearch } from "react-icons/tb";

import styled from "styled-components";

import { useInfiniteRecommendPostListQuery } from "../../hooks/queries/recommendPost";

import BoardListTemplate from "../templates/board/BoardListTemplate";
import PostSelection from "../atoms/post/PostSelection";
import Input from "../common/Input";
import EmptyMessage from "../common/EmptyMessage";
import InfiniteScrollList from "../common/InfiniteScrollList";
import RecommendBoardItem from "../molecules/recommendBoard/RecommendBoardItem";
import { useMediaQueries } from "../../hooks";

const MusicRecommendationBoardPage = () => {
  const [input, setInput] = useState<string>("");
  const queryResult = useInfiniteRecommendPostListQuery();

  const { isPc, isTablet } = useMediaQueries();

  const cols = isPc ? 3 : isTablet ? 2 : 1;

  return (
    <BoardListTemplate>
      <Container>
        <PostSelection />
        <Input
          input={input}
          setInput={setInput}
          width="0.2rem"
          placeholder="검색어 입력"
          button={{
            icon: <TbMusicSearch size="1.2rem" />,
          }}
        />
      </Container>

      {queryResult?.data?.pages[0]?.length === 0 ? (
        <EmptyMessage message="음악추천게시글이 없습니다." />
      ) : (
        <InfiniteScrollList
          queryResult={queryResult}
          ItemComponent={RecommendBoardItem}
          containerStyle={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: "1rem",
            background: "none",
            backdropFilter: "none",
          }}
        />
      )}
    </BoardListTemplate>
  );
};

export default MusicRecommendationBoardPage;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem; /* Optional: add some space between elements */
`;
