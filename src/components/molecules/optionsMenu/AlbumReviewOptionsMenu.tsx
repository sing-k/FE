import { useDeleteAlbumReviewMutation } from "../../../hooks/queries/albumDetail";

import OptionsMenu from "../../common/OptionsMenu";

type Props = {
  writerId: string;
  reviewId: string;
  albumId: string;
};

const AlbumReviewOptionsMenu = ({ writerId, reviewId, albumId }: Props) => {
  const deleteAlbumReviewMutation = useDeleteAlbumReviewMutation(albumId);

  const handleDelete = async () => {
    if (!window.confirm("앨범 감상평을 삭제하시겠습니까?")) return;

    await deleteAlbumReviewMutation.mutateAsync({
      reviewId,
      albumId,
    });
  };

  return <OptionsMenu writerId={writerId} handleDelete={handleDelete} />;
};

export default AlbumReviewOptionsMenu;
