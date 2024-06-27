import { useQuery } from "@tanstack/react-query";

import { getAlbumDetail } from "../../api/albumDetail";

export const useAlbumDetailQuery = (albumId: string) => {
  return useQuery({
    queryKey: ["albums", albumId],
    queryFn: () => getAlbumDetail(albumId),
    enabled: !!albumId,
  });
};
