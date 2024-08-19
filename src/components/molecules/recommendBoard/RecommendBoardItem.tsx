import styled from "styled-components";
import { glassEffectStyle } from "../../../styles/style";

import { useNavigate } from "react-router-dom";

import { pathName } from "../../../App";

import { RecommendPostType } from "../../../types/recommendPostType";

import RecommendThumbnail from "../../atoms/recommendBoard/RecommendThumbnail";
import RecommendTitle from "../../atoms/recommendBoard/RecommendTitle";
import UserInfo from "../../common/UserInfo";
import PostDay from "../../atoms/post/PostDay";
import PostLikeComments from "../../atoms/post/PostLikeComments";
import RecommendGenre from "../../atoms/recommendBoard/RecommendGenre";

type Props = {
  data: RecommendPostType;
};

const RecommendBoardItem = ({ data }: Props) => {
  const {
    link,
    recommend,
    title,
    writer,
    createdAt,
    like,
    comments,
    genre,
    id,
  } = data;
  const navigate = useNavigate();

  const goRecommendPostDetailPage = () => {
    navigate(`${pathName.musicRecommendationBoard}/${id}`);
  };

  return (
    <Container onClick={goRecommendPostDetailPage}>
      <ThumbnailContainer>
        <RecommendThumbnail link={link} recommend={recommend} />
      </ThumbnailContainer>

      <InfoContainer>
        <Wrapper>
          <RecommendTitle title={title} recommend={recommend} />
        </Wrapper>

        <Wrapper>
          <UserInfo nickname={writer.nickname} profileImage={writer.imageUrl} />

          <PostDay createdAt={createdAt} />
        </Wrapper>

        <Wrapper>
          <RecommendGenre genre={genre} />

          <PostLikeComments like={like.count} comments={comments} />
        </Wrapper>
      </InfoContainer>
    </Container>
  );
};

export default RecommendBoardItem;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: white;
`;

const InfoContainer = styled.div`
  width: 100%;
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
