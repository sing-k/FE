type AlbumArtistType = {
  id: string;
  name: string;
};

type AlbumImageType = {
  imageUrl: string;
  width: number;
  height: number;
};

export type AlbumType = {
  id: string;
  name: string;
  count: number;
  averageScore: number;
  modifiedAt: string;
  releasedAt: string;
  artists: AlbumArtistType[];
  images: AlbumImageType[];
};
