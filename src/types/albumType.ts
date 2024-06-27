export interface AlbumArtistType {
  id: string;
  name: string;
}

export interface AlbumImageType {
  imageUrl: string;
  width: number;
  height: number;
}

export interface AlbumType {
  id: string;
  name: string;
  count: number;
  averageScore: number;
  modifiedAt?: string;
  releasedAt: string;
  artists: AlbumArtistType[];
  images: AlbumImageType[];
}
