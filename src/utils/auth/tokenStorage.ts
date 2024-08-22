import { PostType } from "../../types/postType";
import {
  WritePostValues,
  WriteRecommendValues,
} from "../../types/writePostType";

export const saveLoginState = () => {
  localStorage.setItem("loginState", "true");
};

export const clearTokens = () => {
  localStorage.removeItem("loginState");
};

export const getLoginState = () => {
  return localStorage.getItem("loginState");
};

export const saveTemporaryFreePost = (data: WritePostValues): void => {
  const type: PostType = "free";
  localStorage.setItem(type, JSON.stringify(data));
};

export const getTemporaryFreePost = (): WritePostValues | undefined => {
  const type: PostType = "free";
  const data = localStorage.getItem(type);

  if (!data) return undefined;

  return JSON.parse(data);
};

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      resolve(reader.result as string);
    };

    reader.onerror = (error) => {
      reject(error);
    };
  });
};

const base64ToFile = (base64String: string, fileName: string): File => {
  // Base64 문자열에서 데이터를 추출 (앞의 "data:image/png;base64,"와 같은 부분 제거)
  const arr = base64String.split(",");
  const mime = arr[0].match(/:(.*?);/)![1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  // Blob을 File로 변환
  return new File([u8arr], fileName, { type: mime });
};

export const saveTemporaryRecommendPost = async (
  data: WriteRecommendValues
) => {
  const type: PostType = "recommend";

  if (
    data.selectedFile &&
    data.selectedFile.name !== localStorage.getItem("filename")
  ) {
    const filename = data.selectedFile.name;
    const base64 = await fileToBase64(data.selectedFile);

    localStorage.setItem("filename", filename);
    localStorage.setItem("base64", base64);
  }

  localStorage.setItem(type, JSON.stringify(data));
};

export const getTemporaryRecommendPost = ():
  | WriteRecommendValues
  | undefined => {
  const type: PostType = "recommend";
  const data = localStorage.getItem(type);

  if (!data) return undefined;

  let ret: WriteRecommendValues = JSON.parse(data);

  const filename = localStorage.getItem("filename");
  const base64 = localStorage.getItem("base64");

  if (filename && base64) {
    const selectedFile: File = base64ToFile(base64, filename);
    console.log(selectedFile);
    ret.selectedFile = selectedFile;
  }

  return ret;
};

export const clearTemporaryPost = (type: PostType) => {
  localStorage.removeItem(type);

  if (type === "recommend") {
    localStorage.removeItem("filename");
    localStorage.removeItem("base64");
  }
};
