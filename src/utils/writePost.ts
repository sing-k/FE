import { WritePostValues, WriteRecommendValues } from "../types/writePostType";
import { albumLinkToId, isValidYoutubeLink } from "./linkValidation";

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

export const getLinkFromRecommendValues = ({
  type,
  albumLink,
  youtubeLink,
  selectedFile,
}: WriteRecommendValues): string => {
  let ret = "";

  if (type === "ALBUM" && albumLink) {
    ret = albumLinkToId(albumLink);
  } else if (
    type === "YOUTUBE" &&
    youtubeLink &&
    isValidYoutubeLink(youtubeLink)
  ) {
    ret = youtubeLink;
  } else if (type === "IMAGE" && selectedFile) {
    ret = URL.createObjectURL(selectedFile);
  }

  return ret;
};
