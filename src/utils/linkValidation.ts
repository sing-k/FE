import { pathName } from "../App";

export const isValidAlbumLink = (link: string): boolean => {
  try {
    const url = new URL(link);
    const { pathname } = url;

    if (!pathname.startsWith(pathName.albumDetail)) {
      throw new Error();
    }

    return true;
  } catch (err) {
    return false;
  }
};

export const albumLinkToId = (link: string): string => {
  if (!isValidAlbumLink(link)) return "";

  const url = new URL(link);
  const { pathname } = url;
  const substrings = pathname.split("/").map(String);

  if (substrings.length < 4) return "";

  return substrings[substrings.length - 1];
};

export const isValidYoutubeLink = (link: string): boolean => {
  try {
    const url = new URL(link);

    const { hostname } = url;

    if (hostname !== "www.youtube.com") {
      throw new Error();
    }

    return true;
  } catch (err) {
    return false;
  }
};

export const youtubeLinkToId = (link: string): string => {
  if (!isValidYoutubeLink(link)) return "";

  const url = new URL(link);
  const videoId = new URLSearchParams(url.search).get("v");

  if (!videoId) return "";

  return videoId;
};
