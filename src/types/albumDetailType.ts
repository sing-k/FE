import { AlbumArtistType, AlbumImageType } from "./albumType";

export interface TrackType {
  id: string;
  name: string;
  trackNumber: number;
  playable: boolean;
  previewUrl: string;
  duration: number;
  artists: AlbumArtistType[];
}

export interface AlbumDetailType {
  id: string;
  name: string;
  type: string;
  releasedAt: string;
  trackCount: number;
  count: number;
  averageScore: number;
  artists: AlbumArtistType[];
  tracks: TrackType[];
  images: AlbumImageType[];
}
