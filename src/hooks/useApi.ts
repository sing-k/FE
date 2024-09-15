import { useState } from "react";
import client from "../config/axios";
import { useNavigate } from "react-router-dom";
import { clearTokens } from "../utils/auth/tokenStorage";
type Method = "get" | "post" | "put" | "delete";

// interface ApiResponse<T> {
//   statusCode: number;
//   data?: T;
//   // 다른 필요한 응답 데이터가 있다면 여기에 추가
// }

const useApi = () => {
  const [data, setData] = useState<any | null>(null);
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const callApi = async (
    url: string,
    method: Method,
    requestData?: any,
    headers?: Record<any, string> | undefined,
  ) => {
    try {
      const response = await client[method](url, requestData, {
        headers,
      });
      console.log(
        `API 호출: ${method.toUpperCase()} ${url}, 데이터: ${requestData}, 헤더: ${JSON.stringify(headers)}`,
      );

      console.log(response.data);
      setStatusCode(response.data.statusCode);
      if (method === "get" && response.data.statusCode === 200) {
        setData(response.data.data);
      }
      if (response.data.statusCode === 401) {
        clearTokens();
        navigate("/");
      }
      if (response.data.statusCode === 400) {
        setData(response.data.message);
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
