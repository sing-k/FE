import { useQuery } from "@tanstack/react-query";

import { getAlbumList, GetAlbumListArgs } from "../../api/album";

export const useAlbumListQuery = (args: GetAlbumListArgs) => {
  return useQuery({
    queryKey: ["albumList", args],
    queryFn: () => getAlbumList(args),
    enabled: !!args,
  });
};
