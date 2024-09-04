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
import LikeBtn from "../../atoms/common/LikeBtn";
import Input from "../../common/Input";
import {
  useUpdateFreeCommentMutation,
  useUpdateRecommendCommentMutation,
} from "../../../hooks/queries/comment";
import { UpdateCommentContext } from "../../../api/comment";
import FreeCommentOptionsMenu from "../optionsMenu/FreeCommentOptionsMenu";
import RecommendCommentOptionsMenu from "../optionsMenu/RecommendCommentOptionsMenu";

interface Props {
  data: CommentType;
  setParentId: React.Dispatch<React.SetStateAction<string>>;
  parentId: string;
  postId: string;
  type: PostType;
  onClickButton: (input: string) => void;
}

interface CommentProps extends Props {
  commentId: string;
}

type RecommentInputProps = {
  onClickButton: (input: string) => void;
};

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

  const likeCommentMutation =
    type === "free"
      ? useLikeFreeComment(postId)
      : useLikeRecommendComment(postId);

  const updateCommentMutation =
    type === "free"
      ? useUpdateFreeCommentMutation(postId)
      : useUpdateRecommendCommentMutation(postId);

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
        postId,
      };

      if (!updateCommentMutation.isPending) {
        const res = await updateCommentMutation.mutateAsync(ctx);

        if (res) {
          alert("댓글이 수정되었습니다!");
        }
      }

      setUpdateMode(false);
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

        {type === "free" ? (
          <FreeCommentOptionsMenu
            writerId={data.writer.id}
            commentId={data.id}
            postId={postId}
            updateData={{
              content: input,
              updateMode,
              setUpdateMode,
            }}
          />
        ) : (
          <RecommendCommentOptionsMenu
            writerId={data.writer.id}
            commentId={data.id}
            postId={postId}
            updateData={{
              content: input,
              updateMode,
              setUpdateMode,
            }}
          />
        )}
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
            mutate={likeCommentMutation.mutate}
          />
        </Wrapper>
      )}
    </CommentWrapper>
  );
};

const RecommentInput = ({ onClickButton }: RecommentInputProps) => {
  const [input, setInput] = useState<string>("");

  return (
    <ReCommentWrapper>
      <MdOutlineSubdirectoryArrowRight color={color.COLOR_MAIN} />

      <Input
        input={input}
        setInput={setInput}
        placeholder="답글을 입력해주세요"
        width="100%"
        button={{
          text: "등록",
          onClickButton: onClickButton.bind(this, input),
        }}
        textarea={false}
      />
    </ReCommentWrapper>
  );
};

const PostComment = (props: Props) => {
  const { data, parentId } = props;
  const { children } = data;

  const writeRecomment = data.id === parentId;

  return (
    <>
      <Container $writeRecomment={writeRecomment}>
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

      {writeRecomment && (
        <Container
          $writeRecomment={false}
          style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        >
          <RecommentInput onClickButton={props.onClickButton} />
        </Container>
      )}
    </>
  );
};

export default PostComment;

const Container = styled.div<{ $writeRecomment: boolean }>`
  width: 100%;
  background-color: white;
  padding: 0.8rem;
  border: 1.5px solid
    ${({ $writeRecomment }) => ($writeRecomment ? color.COLOR_MAIN : "white")};
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
