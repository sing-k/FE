import { useState } from "react";

import { useInfiniteRecommendPostListQuery } from "../../hooks/queries/recommendPost";
import { useMediaQueries } from "../../hooks";

import { PostFilterType, postFilterType } from "../../types/postType";

import BoardListTemplate from "../templates/board/BoardListTemplate";
import InfiniteScrollList from "../common/InfiniteScrollList";
import RecommendBoardItem from "../molecules/recommendBoard/RecommendBoardItem";
import SearchPost from "../organisms/board/SearchPost";

const MusicRecommendationBoardPage = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [filter, setFilter] = useState<PostFilterType>(
    Object.keys(postFilterType)[0] as PostFilterType
  );

  const queryResult = useInfiniteRecommendPostListQuery({
    sort: "LATEST",
    keyword,
    filter,
  });

  const { isPc, isTablet } = useMediaQueries();

  const cols = isPc ? 3 : isTablet ? 2 : 1;

  return (
    <BoardListTemplate>
      <SearchPost setFilter={setFilter} setKeyword={setKeyword} />

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
        emptyMessage="음악 추천 게시글이 없습니다."
      />
    </BoardListTemplate>
  );
};

export default MusicRecommendationBoardPage;
