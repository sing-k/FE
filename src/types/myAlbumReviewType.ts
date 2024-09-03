export interface Vote {
  prosCount: number;
  consCount: number;
  pros: boolean;
  cons: boolean;
}

export interface Artist {
  id: string;
  name: string;
}

export interface Image {
  imageUrl: string;
  width: number;
  height: number;
}

export interface Album {
  id: string;
  name: string;
  artists: Artist[];
  images: Image[];
}

export interface AlbumReview {
  id: string;
  content: string;
  score: number;
  vote: Vote;
  createdAt: string;
  album: Album;
}

export interface AlbumReviewResponse {
  offset: number;
  limit: number;
  total: number;
  items: AlbumReview[];
}

export interface AlbumReviewPageParam {
  offset: number;
}
