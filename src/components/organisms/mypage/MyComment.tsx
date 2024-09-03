import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import color from "../../../styles/color";
import styled from "styled-components";
import { Text } from "../../common";
import { MyCommentFooter, MyBoardHeader } from "../../molecules";
import { glassEffectStyle } from "../../../styles/style";
import { useInfiniteMyCommentsQuery } from "../../../hooks/queries/comment";
import { MyCommentType } from "../../../types/commentType";
import Loading from "../../common/Loading";
import ErrorMessage from "../../common/ErrorMessage";
import EmptyMessage from "../../common/EmptyMessage";
import { MyBoardType } from "../../atoms";
import TabMenu from "../../common/TabMenu";
import { pathName } from "../../../App";
import InfiniteScrollList from "../../common/InfiniteScrollList";

const filterObj = {
  recommend: "음악 추천 게시글",
  free: "자유 게시글",
} as const;

export type FilterKey = keyof typeof filterObj;

const MyComment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentFilter, setCurrentFilter] = useState<FilterKey>("recommend");
  const result = useInfiniteMyCommentsQuery(currentFilter);
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = result;
  const onClickTab = (key?: string) => {
    const path =
      `${location.pathname}?tab=comment` +
      (key === "free" ? "&filter=free" : "");

    navigate(`${path}`);
  };

  const handelClickLink = (id: string, type: string) => {
    if (type === "앨범 추천 게시글") {
      navigate(`${pathName.musicRecommendationBoard}/${id}`);
    } else {
      navigate(`${pathName.board}/${id}`);
    }
  };

  useEffect(() => {
    const currentFilter = new URLSearchParams(location.search).get("filter");

    if (currentFilter) {
      setCurrentFilter("free");
    } else {
      setCurrentFilter("recommend");
    }
  }, [location]);

  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isLoading]);

  if (isLoading && !data) return <Loading />;
  if (isError) return <ErrorMessage message={error?.message || "Error"} />;

  return (
    <>
      <TabMenu
        tabObj={filterObj}
        currentTab={currentFilter}
        onClickTab={onClickTab}
      />
      <Container>
        {data && data.pages[0].length > 0 ? (
          <InfiniteScrollList
            queryResult={result}
            ItemComponent={({ data }: { data: MyCommentType }) => (
              <div key={data.id}>
                <Card onClick={() => handelClickLink(data.postId, data.type)}>
                  <MyBoardHeader
                    nickname={data.writer.nickname}
                    createdAt={data.createdAt}
                    imageUrl={data.writer.imageUrl}
                  />
                  <Text color="black" size="1rem">
                    {data.content}
                  </Text>
                  <MyCommentFooter
                    type={data.type}
                    likeCount={data.like.count}
                  />
                </Card>
                {data.children.length > 0 && (
                  <>
                    {data.children.map((childComment: MyCommentType) => (
                      <Card
                        key={childComment.id}
                        onClick={() => handelClickLink(data.postId, data.type)}
                      >
                        <MyBoardHeader
                          nickname={childComment.writer.nickname}
                          createdAt={childComment.createdAt}
                          imageUrl={childComment.writer.imageUrl}
                        />
                        <Text color="black" size="1rem">
                          {childComment.content}
                        </Text>
                        <TypeContainder>
                          <MyBoardType type={"대댓글"} />
                          <MyCommentFooter
                            type={childComment.type}
                            likeCount={childComment.like.count}
                          />
                        </TypeContainder>
                      </Card>
                    ))}
                  </>
                )}
              </div>
            )}
            containerStyle={containerStyle}
          />
        ) : (
          <EmptyMessage message={"게시된 댓글이 없습니다."} />
        )}
      </Container>
    </>
  );
};

export default MyComment;

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  borderRadius: "5px",
  padding: "1rem",
  background: "none",
  backdropFilter: "none",
  maxHeight: "80vh",
};

const Container = styled.div`
  ${glassEffectStyle()}
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 5px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.5rem;
  border-bottom: 2px solid;
  border-image: linear-gradient(
      to right,
      ${color.COLOR_GRADIENT_PURPLE},
      ${color.COLOR_GRADIENT_PINK}
    )
    1;
  &:hover {
    cursor: pointer;
  }
`;

const TypeContainder = styled.div`
  display: flex;
  gap: 0.5rem;
`;
