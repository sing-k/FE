import { useState } from "react";
import client from "../config/axios";
import { saveTokensToLocalStorage } from "../utils/auth/tokenStorage";
import { LoginType } from "../types/authTypes";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (url: string, data: LoginType) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await client.post(url, data);
      console.log(response);
      if (response.data.status === 200) {
        const accessToken = response.headers.authorization.split("Bearer ")[1];
        const refreshToken = response.headers.refresh;
        if (accessToken && refreshToken) {
          saveTokensToLocalStorage(accessToken, refreshToken);
        }
        return response;
      } else {
        console.log(response);
        setError("로그인에 실패했습니다. 입력사항을 확인해주세요.");
        return response.data;
      }

      // } catch (err) {
      //   setError("로그인 요청 중 오류가 발생했습니다.");
      //   console.error("로그인 요청 중 오류가 발생했습니다.", err);
      //   return err;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};

export default useLogin;
