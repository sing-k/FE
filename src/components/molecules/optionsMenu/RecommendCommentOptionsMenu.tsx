import React from "react";

import {
  useDeleteRecommendCommentMutation,
  useUpdateRecommendCommentMutation,
} from "../../../hooks/queries/comment";

import { UpdateCommentContext } from "../../../api/comment";

import OptionsMenu from "../../common/OptionsMenu";

type UpdateProps = {
  content: string;
  updateMode: boolean;
  setUpdateMode: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = {
  writerId: string;
  commentId: string;
  postId: string;
  updateData?: UpdateProps;
};

const RecommendCommentOptionsMenu = ({
  writerId,
  commentId,
  postId,
  updateData,
}: Props) => {
  const updateRecommendCommentMutation =
    useUpdateRecommendCommentMutation(postId);
  const deleteRecommendCommentMutation =
    useDeleteRecommendCommentMutation(postId);

  const handleUpdate = updateData
    ? async () => {
        const { content, updateMode, setUpdateMode } = updateData;

        if (!updateMode) {
          setUpdateMode(true);
        } else {
          if (!content) {
            alert("댓글을 입력해주세요!");
            return;
          }

          const ctx: UpdateCommentContext = {
            commentId,
            content,
            postId,
          };

          if (!updateRecommendCommentMutation.isPending) {
            const res = await updateRecommendCommentMutation.mutateAsync(ctx);

            if (res) {
              alert("댓글이 수정되었습니다!");
            }
          }

          setUpdateMode(false);
        }
      }
    : undefined;

  const handleDelete = async () => {
    if (!window.confirm("댓글을 삭제하시겠습니까?")) return;

    const ctx: UpdateCommentContext = {
      commentId,
      postId,
    };

    await deleteRecommendCommentMutation.mutateAsync(ctx);
  };

  return (
    <OptionsMenu
      writerId={writerId}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
    />
  );
};

export default RecommendCommentOptionsMenu;
