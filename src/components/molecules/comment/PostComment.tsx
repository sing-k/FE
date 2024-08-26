import React, { useState } from "react";

import styled from "styled-components";

import color from "../../../styles/color";

import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

import { CommentType } from "../../../types/commentType";
import { PostType } from "../../../types/postType";

import { dateTimeFormat } from "../../../utils/date";

import {
  useLikeFreeComment,
  useLikeRecommendComment,
} from "../../../hooks/queries/like";

import UserInfo from "../../common/UserInfo";
import OptionsMenu from "../../common/OptionsMenu";
import LikeBtn from "../../atoms/common/LikeBtn";
import Input from "../../common/Input";
import {
  useDeleteFreeCommentMutation,
  useDeleteRecommendCommentMutation,
  useUpdateFreeCommentMutation,
  useUpdateRecommendCommentMutation,
} from "../../../hooks/queries/comment";
import { UpdateCommentContext } from "../../../api/comment";

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
  const [updateMode, setUpdateMode] = useState<boolean>(false);
  const [input, setInput] = useState<string>(data.content);

  const likeFreeCommentMutation = useLikeFreeComment(postId);
  const likeRecommendCommentMutation = useLikeRecommendComment(postId);

  const updateFreeCommentMutation = useUpdateFreeCommentMutation(postId);
  const updateRecommendCommentMutation =
    useUpdateRecommendCommentMutation(postId);

  const deleteFreeCommentMutation = useDeleteFreeCommentMutation(postId);
  const deleteRecommendCommentMutation =
    useDeleteRecommendCommentMutation(postId);

  const onClickRecomment = () => {
    if (parentId === commentId) {
      setParentId("");
    } else {
      setParentId(commentId);
    }
  };

  const handleUpdate = async () => {
    if (!updateMode) {
      setUpdateMode(true);
    } else {
      if (!input) {
        alert("댓글을 입력해주세요!");
        return;
      }

      const ctx: UpdateCommentContext = {
        commentId: data.id,
        content: input,
      };

      const res =
        type === "free"
          ? await updateFreeCommentMutation.mutateAsync(ctx)
          : await updateRecommendCommentMutation.mutateAsync(ctx);

      if (res) {
        alert("댓글이 수정되었습니다!");
      }

      setUpdateMode(false);
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm("댓글을 삭제하시겠습니까?");

    if (confirm) {
      if (type === "free") {
        await deleteFreeCommentMutation.mutateAsync(data.id);
      } else {
        await deleteRecommendCommentMutation.mutateAsync(data.id);
      }
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

        <OptionsMenu
          writerId={data.writer.id}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </Wrapper>

      {updateMode ? (
        <Wrapper>
          <Input
            input={input}
            setInput={setInput}
            placeholder="댓글을 입력해주세요"
            width="100%"
            button={
              input === data.content || !input
                ? {
                    text: "취소",
                    onClickButton: () => {
                      setUpdateMode(false);
                    },
                    buttonStyle: {
                      backgroundColor: color.COLOR_GRAY_BACKGROUND,
                    },
                  }
                : {
                    text: "수정",
                    onClickButton: handleUpdate,
                  }
            }
          />
        </Wrapper>
      ) : (
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
      )}
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
