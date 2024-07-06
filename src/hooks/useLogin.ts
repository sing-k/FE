import { useState } from "react";
import client from "../config/axios";
import {
  saveTokensToLocalStorage,
  saveLoginState,
} from "../utils/auth/tokenStorage";
import { LoginType } from "../types/authTypes";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (url: string, data: LoginType) => {
    setIsLoading(true);
    try {
      const response = await client.post(url, data);
      if (response.status === 200 && response.data.length === 0) {
        const accessToken = response.headers.authorization.split("Bearer ")[1];
        const refreshToken = response.headers.refresh;
        if (accessToken && refreshToken) {
          saveTokensToLocalStorage(accessToken, refreshToken);
          saveLoginState();
        }
        return response;
      } else {
        setError(response.data.message);
        return response.data;
      }
    } catch (err) {
      setError("로그인 요청 중 오류가 발생했습니다.");
      console.error("로그인 요청 중 오류가 발생했습니다.", err);
      return err;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};

export default useLogin;
