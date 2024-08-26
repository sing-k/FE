import styled from "styled-components";
import RecommendThumbnail from "../../atoms/recommendBoard/RecommendThumbnail";
import { MyMusicHeader, MyMusicFooter, MyBoardHeader } from "../../molecules";
import { glassEffectStyle } from "../../../styles/style";
import { useMyRecommendPostsQuery } from "../../../hooks/queries/recommendPost";
import Loading from "../../common/Loading";
import { RecommendPostType } from "../../../types/recommendPostType";
import { useMediaQueries } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { pathName } from "../../../App";
const MyMusicRecommendation = () => {
  const navigate = useNavigate();
  const { isPc, isTablet } = useMediaQueries();
  const { data, isLoading, error } = useMyRecommendPostsQuery(0, 20);
  if (isLoading) return <Loading />;
  if (error) return <div>Error loading recommendations</div>;

  const cols = isPc ? 3 : isTablet ? 2 : 1;

  const handelClickLink = (id: string) => {
    navigate(`${pathName.musicRecommendationBoard}/${id}`);
  };
  return (
    <OuterContainer>
      <Container cols={cols}>
        {data?.items.map((post: RecommendPostType) => (
          <Card key={post.id} onClick={() => handelClickLink(post.id)}>
            <ThumbnailContainer>
              <RecommendThumbnail link={post.link} recommend={post.recommend} />
            </ThumbnailContainer>
            <MyMusicHeader title={post.title} recommend={post.recommend} />
            <MyBoardHeader
              nickname={post.writer.nickname}
              createdAt={post.createdAt}
            />
            <MyMusicFooter
              genre={post.genre}
              likeCount={post.like.count}
              commentCount={post.comments}
            />
          </Card>
        ))}
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

interface ContainerProps {
  cols: number;
}

const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  width: 100%;
`;

const Card = styled.div`
  ${glassEffectStyle()}
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: white;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px 5px 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* 비율 유지하며 컨테이너 내에 맞춤 */
  }
`;
