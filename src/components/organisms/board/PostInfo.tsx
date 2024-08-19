import styled from "styled-components";

import color from "../../../styles/color";

import { PostType, GeneralPostType } from "../../../types/post";
import { RecommendGenreType } from "../../../types/recommendPostType";

import UserInfo from "../../common/UserInfo";
import PostMenu from "../../molecules/board/PostMenu";
import RecommendGenre from "../../atoms/recommendBoard/RecommendGenre";
import PostDay from "../../atoms/post/PostDay";
import PostLikeComments from "../../atoms/post/PostLikeComments";

type Props = {
  type: PostType;
  post: GeneralPostType;
};

const PostInfo = ({ type, post }: Props) => {
  const { title, writer, like, comments, createdAt } = post;

  return (
    <>
      {type === "recommend" && (
        <RecommendGenre genre={post?.genre as RecommendGenreType} />
      )}

      <TitleWrapper>
        <Title>{title}</Title>

        <PostMenu />
      </TitleWrapper>

      <InfoWrapper>
        <UserInfo
          nickname={writer.nickname}
          profileImage={writer.imageUrl}
          size="S"
        />

        <PostDay createdAt={createdAt} />

        <PostLikeComments like={like.count} comments={comments} />
      </InfoWrapper>
    </>
  );
};

export default PostInfo;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${color.COLOR_GRAY_TEXT};
  gap: 1rem;
`;
