import { pathName } from "../App";

export const isValidAlbumLink = (link?: string): boolean => {
  try {
    if (!link) return false;

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

export const albumLinkToId = (link?: string): string => {
  if (!link || !isValidAlbumLink(link)) return "";

  const url = new URL(link);
  const { pathname } = url;
  const substrings = pathname.split("/").map(String);

  if (substrings.length < 4) return "";

  return substrings[substrings.length - 1];
};

export const isValidYoutubeLink = (link?: string): boolean => {
  try {
    if (!link) return false;

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

export const parsingAlbumId = (link: string): string => {
  const substrings = link.split("/");

  return substrings[substrings.length - 1];
};

export const parsingAlbumImageSrc = (link: string): string => {
  const albumId = "/" + parsingAlbumId(link);

  const ret = link.replace(albumId, "").trim();

  return ret;
};
