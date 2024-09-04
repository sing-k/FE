import { useNavigate } from "react-router-dom";

import { useDeleteRecommendPostMutation } from "../../../hooks/queries/recommendPost";

import { pathName } from "../../../App";

import OptionsMenu from "../../common/OptionsMenu";

type Props = {
  postId: string;
  writerId: string;
};

const RecommendPostOptionsMenu = ({ postId, writerId }: Props) => {
  const deleteRecommendPostMutation = useDeleteRecommendPostMutation(postId);

  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`${pathName.updateRecommendPost}/${postId}`);
  };

  const handleDelete = async () => {
    if (!window.confirm("음악 추천 게시글을 삭제하시겠습니까?")) return;

    const res = await deleteRecommendPostMutation.mutateAsync(postId);

    if (res) {
      navigate(`${pathName.musicRecommendationBoard}`);
    }
  };

  return (
    <OptionsMenu
      writerId={writerId}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
    />
  );
};

export default RecommendPostOptionsMenu;
