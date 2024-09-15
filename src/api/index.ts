import { AxiosResponse } from "axios";

export const checkAPIResponseValidation = (res: AxiosResponse) => {
  if (!String(res.data?.statusCode).startsWith("2")) {
    throw new Error(res.data?.message || "Unknown Error");
  }
  return true;
};
