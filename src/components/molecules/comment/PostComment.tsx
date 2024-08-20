import React from "react";

import styled from "styled-components";

import color from "../../../styles/color";

import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

import { CommentType } from "../../../types/commentType";
import { PostType } from "../../../types/postType";

import { dateTimeFormat } from "../../../utils/date";

import UserInfo from "../../common/UserInfo";
import CommentMenu from "./CommentMenu";
import LikeBtn from "../../atoms/common/LikeBtn";
import {
  useLikeFreeComment,
  useLikeRecommendComment,
} from "../../../hooks/queries/like";

interface Props {
  data: CommentType;
  setParentId: React.Dispatch<React.SetStateAction<string>>;
  parentId: string;
  postId: string;
  type: PostType;
}

interface CommentProps extends Props {
  commentId: string;
}

const Comment = ({
  data,
  setParentId,
  parentId,
  commentId,
  postId,
  type,
}: CommentProps) => {
  const likeFreeCommentMutation = useLikeFreeComment(postId);
  const likeRecommendCommentMutation = useLikeRecommendComment(postId);

  const onClickRecomment = () => {
    if (parentId === commentId) {
      setParentId("");
    } else {
      setParentId(commentId);
    }
  };

  return (
    <CommentWrapper>
      <Wrapper>
        <UserWrapper>
          <UserInfo
            profileImage={data.writer.imageUrl}
            nickname={data.writer.nickname}
            size="S"
          />

          {dateTimeFormat(data.createdAt)}
        </UserWrapper>

        <CommentMenu />
      </Wrapper>

      <Wrapper style={{ alignItems: "flex-start" }}>
        <ContentsWrapper>
          <Contents>{data.content}</Contents>

          <ReCommentBtn onClick={onClickRecomment}>답글달기</ReCommentBtn>
        </ContentsWrapper>

        <LikeBtn
          count={data.like.count}
          like={data.like.like}
          id={data.id}
          writerId={data.writer.id}
          mutate={
            type === "free"
              ? likeFreeCommentMutation.mutate
              : likeRecommendCommentMutation.mutate
          }
        />
      </Wrapper>
    </CommentWrapper>
  );
};

const PostComment = (props: Props) => {
  const { data, parentId } = props;
  const { children } = data;

  return (
    <Container
      style={data.id === parentId ? { borderColor: color.COLOR_MAIN } : {}}
    >
      <Comment {...props} commentId={data.id} />

      {children &&
        children.length > 0 &&
        children.map((child) => (
          <ReCommentWrapper key={child.id}>
            <MdOutlineSubdirectoryArrowRight color={color.COLOR_GRAY_TEXT} />

            <Comment {...props} data={child} commentId={data.id} />
          </ReCommentWrapper>
        ))}
    </Container>
  );
};

export default PostComment;

const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 0.8rem;
  border: 1px solid white;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const CommentWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ReCommentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${color.COLOR_GRAY_TEXT};
  font-size: 0.8rem;
  gap: 10px;
`;

const ContentsWrapper = styled.div`
  margin-right: 1rem;
`;

const Contents = styled.p`
  font-size: 1rem;
  line-height: calc(1rem * 1.5);
`;

const ReCommentBtn = styled.p`
  margin-top: 0.6rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${color.COLOR_MAIN};
  cursor: pointer;
`;
