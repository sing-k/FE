import { useNavigate } from "react-router-dom";

import { useDeleteFreePostMutation } from "../../../hooks/queries/freePost";

import { pathName } from "../../../App";

import OptionsMenu from "../../common/OptionsMenu";

type Props = {
  postId: string;
  writerId: string;
};

const FreePostOptionsMenu = ({ postId, writerId }: Props) => {
  const deleteFreePostMutation = useDeleteFreePostMutation(postId);

  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`${pathName.updatePost}/${postId}`);
  };

  const handleDelete = async () => {
    if (!window.confirm("자유 게시글을 삭제하시겠습니까?")) return;

    const res = await deleteFreePostMutation.mutateAsync(postId);

    if (res) {
      navigate(`${pathName.board}`);
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

export default FreePostOptionsMenu;
