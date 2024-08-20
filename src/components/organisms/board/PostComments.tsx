import { useEffect, useState } from "react";

import styled from "styled-components";

import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";

import { PostType } from "../../../types/postType";
import { CommentContext } from "../../../types/commentType";

import {
  useFreeCommentMutation,
  useFreePostCommentsQuery,
  useRecommendCommentMutation,
  useRecommendPostCommentsQuery,
} from "../../../hooks/queries/comment";

import Loading from "../../common/Loading";
import ErrorMessage from "../../common/ErrorMessage";
import Input from "../../common/Input";
import PostComment from "../../molecules/comment/PostComment";

type Props = {
  type: PostType;
  postId: string;
};

const PostComments = ({ type, postId }: Props) => {
  const [input, setInput] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [parentId, setParentId] = useState<string>("");

  const { data, isLoading, isError, error } =
    type === "free"
      ? useFreePostCommentsQuery(postId)
      : useRecommendPostCommentsQuery(postId);

  const freeCommentMutation = useFreeCommentMutation(postId);
  const recommendCommentMutation = useRecommendCommentMutation(postId);

  const onClickButton = async () => {
    if (!input) {
      alert("댓글 내용을 작성해주세요!");
      return;
    }

    const ctx: CommentContext = {
      postId,
      content: input,
      parentId,
    };

    let res = false;

    if (type === "free") {
      res = await freeCommentMutation.mutateAsync(ctx);
    } else {
      res = await recommendCommentMutation.mutateAsync(ctx);
    }

    if (res) {
      alert("댓글이 작성되었습니다.");
      setInput("");
    }
  };

  useEffect(() => {
    if (data) {
      let totalCount = data.length;
      data.forEach((el) => {
        totalCount += el.children.length;
      });
      setCount(totalCount);
    }
  }, [data]);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;
  if (!data) return <></>;

  return (
    <Container>
      <Text>
        댓글
        <Num>{count}</Num>
      </Text>

      <CommentWrapper>
        {data.map((comment) => (
          <PostComment
            key={comment.id}
            data={comment}
            parentId={parentId}
            setParentId={setParentId}
          />
        ))}
      </CommentWrapper>

      <Input
        input={input}
        setInput={setInput}
        placeholder="댓글을 입력해주세요"
        width="100%"
        button={{ text: "등록", onClickButton }}
        textarea={false}
      />
    </Container>
  );
};

export default PostComments;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Num = styled.span`
  font-size: 1rem;
  color: ${color.COLOR_GRAY_TEXT};
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;
