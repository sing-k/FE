import { pathName } from "../App";

export const isValidURL = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};

// 호스트 이름이 youtube.com인지 확인하는 함수
export const isYouTubeURL = (inputURL: string) => {
  try {
    const url = new URL(inputURL);
    return url.hostname.endsWith("youtube.com");
  } catch (_) {
    return false;
  }
};

export const isAlbumURL = (inputURL: string) => {
  try {
    const url = new URL(inputURL);
    if (url.hostname !== window.location.hostname) {
      return false;
    }
    return url.pathname.startsWith(pathName.albumDetail);
  } catch (_) {
    return false;
  }
};
