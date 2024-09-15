import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";

import { useHomeFreePostListQuery } from "../../../hooks/queries/freePost";

import HomePostListTemplate from "../../templates/home/HomePostListTemplate";
import ErrorMessage from "../../common/ErrorMessage";
import Loading from "../../common/Loading";
import EmptyMessage from "../../common/EmptyMessage";
import FreeBoardItem from "../../molecules/freeBoard/FreeBoardItem";

const HomeFreePostList = () => {
  const { data, isLoading, isError, error } = useHomeFreePostListQuery();

  return (
    <HomePostListTemplate listHeaderText="자유 게시판">
      {isError ? (
        <ErrorMessage message={error.message} />
      ) : isLoading ? (
        <Loading />
      ) : (
        data &&
        (data.length === 0 ? (
          <EmptyMessage message="자유 게시글이 없습니다." />
        ) : (
          <Container>
            {data.map((freePost) => (
              <FreeBoardItem
                key={freePost.id}
                data={freePost}
                viewContent={false}
              />
            ))}
          </Container>
        ))
      )}
    </HomePostListTemplate>
  );
};

export default HomeFreePostList;

const Container = styled.div`
  ${glassEffectStyle({ blur: "20px" })}
  width: 100%;
  padding: 0 1rem 1rem;
  border-radius: 3px;
`;
