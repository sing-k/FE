import styled from "styled-components";

import color from "../../../styles/color";

import { useNavigate } from "react-router-dom";

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
import OptionsMenu from "../../common/OptionsMenu";

import { pathName } from "../../../App";
import { useDeleteFreePostMutation } from "../../../hooks/queries/freePost";
import { useDeleteRecommendPostMutation } from "../../../hooks/queries/recommendPost";

type Props = {
  type: PostType;
  post: GeneralPostType;
};

const PostInfo = ({ type, post }: Props) => {
  const { title, writer, like, comments, createdAt, id } = post;

  const mutation =
    type === "free"
      ? useDeleteFreePostMutation(id)
      : useDeleteRecommendPostMutation(id);

  const navigate = useNavigate();

  const handleUpdate = () => {
    if (type === "free") {
      navigate(`${pathName.updatePost}/${id}`);
    } else {
      navigate(`${pathName.updateRecommendPost}/${id}`);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("게시글을 삭제하시겠습니까?")) return;

    const res = await mutation.mutateAsync(id);

    if (res) {
      if (type === "free") {
        navigate(`${pathName.board}`);
      } else {
        navigate(`${pathName.musicRecommendationBoard}`);
      }
    }
  };

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

        <OptionsMenu
          writerId={writer.id as string}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
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
