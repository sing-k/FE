import { WritePostValues } from "../types/writePostType";

export const checkPostBody = ({ title, content }: WritePostValues): boolean => {
  if (!title || title === "") {
    alert("게시글 제목을 작성해주세요.");
    return false;
  }

  const strippedContent = content.replace(/<\/?[^>]+(>|$)/g, "").trim();
  if (!strippedContent) {
    alert("게시글 내용을 작성해주세요.");
    return false;
  }

  return true;
};
