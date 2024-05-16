import { useState } from "react";
import client from "../config/axios";

type Method = "get" | "post" | "put" | "delete";

interface ApiResponse<T> {
  statusCode: number;
  data: T;
  // 다른 필요한 응답 데이터가 있다면 여기에 추가
}

const useApi = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const callApi = async (
    url: string,
    method: Method,
    requestData?: any,
    headers?: Record<string, string>,
  ) => {
    try {
      const response = await client[method]<ApiResponse<T>>(url, requestData, {
        headers,
      });
      console.log(`API 호출: ${method.toUpperCase()} ${url}`);
      console.log(response.data);
      setStatusCode(response.data.statusCode);
      if (method === "get" && response.data.statusCode === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error("API 호출 중 오류가 발생했습니다.", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    statusCode,
    callApi,
    isLoading,
  };
};

export default useApi;
