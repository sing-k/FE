export interface ActivityDataType {
  date: string;
  score: number;
}

export interface ListType {
  content: string;
  score: number;
  date: string;
}

export interface ActivityListType {
  items: ListType[];
  limit: number;
  total: number;
}
