import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import color from "../../../styles/color";
import styled from "styled-components";
import { Text } from "../../common";
import { MyCommentFooter, MyBoardHeader } from "../../molecules";
import { glassEffectStyle } from "../../../styles/style";
import { useMyCommentsQuery } from "../../../hooks/queries/comment";
import { MyCommentType } from "../../../types/commentType";
import Loading from "../../common/Loading";
import ErrorMessage from "../../common/ErrorMessage";
import EmptyMessage from "../../common/EmptyMessage";
import { MyBoardType } from "../../atoms";
import TabMenu from "../../common/TabMenu";
import { pathName } from "../../../App";

const filterObj = {
  recommend: "음악 추천 게시글",
  free: "자유 게시글",
} as const;

export type FilterKey = keyof typeof filterObj;

const MyComment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentFilter, setCurrentFilter] = useState<FilterKey>("recommend");
  const result = useMyCommentsQuery(currentFilter);
  const { data, isLoading, isError, error } = result;

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

  if (isLoading && !data) return <Loading />;
  if (isError) return <ErrorMessage message={error?.message || "Error"} />;
  console.log(data);
  return (
    <>
      <TabMenu
        tabObj={filterObj}
        currentTab={currentFilter}
        onClickTab={onClickTab}
      />
      <Container>
        {data && data.length > 0 ? (
          data.map((comment: MyCommentType) => (
            <div key={comment.id}>
              <Card
                onClick={() => handelClickLink(comment.postId, comment.type)}
              >
                <MyBoardHeader
                  nickname={comment.writer.nickname}
                  createdAt={comment.createdAt}
                  imageUrl={comment.writer.imageUrl}
                />
                <Text color="black" size="1rem">
                  {comment.content}
                </Text>
                <MyCommentFooter
                  type={comment.type}
                  likeCount={comment.like.count}
                />
              </Card>
              {comment.children.length > 0 && (
                <>
                  {comment.children.map((childComment: MyCommentType) => (
                    <Card
                      key={childComment.id}
                      onClick={() =>
                        handelClickLink(comment.postId, comment.type)
                      }
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
          ))
        ) : (
          <EmptyMessage message={"게시된 댓글이 없습니다."} />
        )}
      </Container>
    </>
  );
};

export default MyComment;

const Container = styled.div`
  ${glassEffectStyle()}
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
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
