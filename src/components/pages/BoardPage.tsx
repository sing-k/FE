import { useState } from "react";

import { useInfiniteFreePostListQuery } from "../../hooks/queries/freePost";

import { PostFilterType, postFilterType } from "../../types/postType";

import BoardListTemplate from "../templates/board/BoardListTemplate";
import FreeBoardItem from "../molecules/freeBoard/FreeBoardItem";
import InfiniteScrollList from "../common/InfiniteScrollList";
import SearchPost from "../organisms/board/SearchPost";

const BoardPage = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [filter, setFilter] = useState<PostFilterType>(
    Object.keys(postFilterType)[0] as PostFilterType
  );

  const queryResult = useInfiniteFreePostListQuery({
    sort: "LATEST",
    keyword,
    filter,
  });

  return (
    <>
      <BoardListTemplate>
        <SearchPost setFilter={setFilter} setKeyword={setKeyword} />

        <InfiniteScrollList
          queryResult={queryResult}
          ItemComponent={FreeBoardItem}
          containerStyle={{
            padding: "0 1rem 1rem",
          }}
          emptyMessage="자유 게시글이 없습니다."
        />
      </BoardListTemplate>
    </>
  );
};

export default BoardPage;
