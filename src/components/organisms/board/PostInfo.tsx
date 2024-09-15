import styled from "styled-components";

import color from "../../../styles/color";

import { PostType, GeneralPostType } from "../../../types/postType";
import {
  RecommendGenreType,
  RecommendType,
} from "../../../types/recommendPostType";

import UserInfo from "../../common/UserInfo";
import RecommendGenre from "../../atoms/recommendBoard/RecommendGenre";
import PostDay from "../../atoms/post/PostDay";
import PostLikeComments from "../../atoms/post/PostLikeComments";
import RecommendTypeLabel from "../../atoms/recommendBoard/RecommendTypeLabel";
import FreePostOptionsMenu from "../../molecules/optionsMenu/FreePostOptionsMenu";
import RecommendPostOptionsMenu from "../../molecules/optionsMenu/RecommendPostOptionsMenu";

type Props = {
  type: PostType;
  post: GeneralPostType;
};

const PostInfo = ({ type, post }: Props) => {
  const { title, writer, like, comments, createdAt, id } = post;

  return (
    <>
      {type === "recommend" && (
        <RecommendGenre genre={post?.genre as RecommendGenreType} />
      )}

      <Wrapper style={{ width: "100%" }}>
        <Wrapper>
          {type === "recommend" && (
            <RecommendTypeLabel
              recommend={post?.recommend as RecommendType}
              style={{
                backdropFilter: "none",
                backgroundColor: color.COLOR_RECOMMEND_LABEL,
              }}
            />
          )}
          <Title>{title}</Title>
        </Wrapper>

        {type === "free" ? (
          <FreePostOptionsMenu writerId={writer.id} postId={id} />
        ) : (
          <RecommendPostOptionsMenu writerId={writer.id} postId={id} />
        )}
      </Wrapper>

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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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
