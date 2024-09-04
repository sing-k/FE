export interface CommentLikeType {
  like: boolean;
  count: number;
}

export interface CommentWriterType {
  id: string;
  imageUrl?: string;
  nickname: string;
}

export interface CommentType {
  id: string;
  parentId?: string;
  type: string;
  content: string;
  children: CommentType[];
  like: CommentLikeType;
  createdAt: string;
  modifiedAt: string;
  writer: CommentWriterType;
}

export interface CommentContext {
  postId: string;
  parentId?: string;
  content: string;
}

export interface MyCommentType extends CommentType {
  postId: string;
  children: MyCommentType[];
}

export interface CommentPageParam {
  offset: number;
}
