import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Text } from "../../common";
import { MyBoardHeader, MyFreeBoardFooter } from "../../molecules";
import { glassEffectStyle } from "../../../styles/style";
import color from "../../../styles/color";
import { useInfiniteMyFreePostsQuery } from "../../../hooks/queries/freePost";
import Loading from "../../common/Loading";
import ErrorMessage from "../../common/ErrorMessage";
import EmptyMessage from "../../common/EmptyMessage";
import InfiniteScrollList from "../../common/InfiniteScrollList";
import { pathName } from "../../../App";
import { FreePostType } from "../../../types/freePostType";

const MyFreeBoard = () => {
  const result = useInfiniteMyFreePostsQuery();
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = result;
  const navigate = useNavigate();

  // 무한 스크롤 로직
  useEffect(() => {
    if (!isLoading && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isLoading]);

  if (isLoading || !data) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;

  const handelClickLink = (id: string) => {
    navigate(`${pathName.board}/${id}`);
  };
  console.log(data);
  return (
    <Container>
      {data.pages[0].length > 0 ? (
        <InfiniteScrollList
          queryResult={result}
          ItemComponent={({ data }: { data: FreePostType }) => (
            <Card key={data.id} onClick={() => handelClickLink(data.id)}>
              <MyBoardHeader
                nickname={data.writer.nickname}
                createdAt={data.createdAt}
                imageUrl={data.writer.imageUrl}
              />

              <Text color="black" size="1rem" bold={700}>
                {data.title}
              </Text>

              <MyFreeBoardFooter
                content={data.content}
                like={data.like}
                commentCount={data.comments}
              />
            </Card>
          )}
          containerStyle={containerStyle}
        />
      ) : (
        <EmptyMessage message={"게시된 자유글이 없습니다."} />
      )}
    </Container>
  );
};

export default MyFreeBoard;

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  borderRadius: "5px",
  padding: "1rem",
  background: "none",
  backdropFilter: "none",
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
  padding-bottom: 1rem;
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
