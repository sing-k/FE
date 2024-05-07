import { useEffect } from "react";

import client from "../config/axios";
import { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const useAxiosInterceptors = () => {
  /* 요청을 보내기 전 작업을 수행하는 interceptor 핸들러 */
  const requestHandler = async (config: InternalAxiosRequestConfig<any>) => {
    // config.headers.Authorization = `Bearer`
    return config;
  };
  /* 요청 에러 핸들링 */
  const requestErrorHandler = async (error: any) => {
    console.log("client request error: ", error);
    return Promise.reject(error);
  };

  /* 응답이 정상적으로 도착했을 때의 작업을 수행하는 interceptor 핸들러 */
  /* 응답 상태 코드가 2xx 이면, 이 함수가 트리거 됨 */
  const responseHandler = async (res: AxiosResponse<any, any>) => {
    return res;
  };
  /* 응답이 에러가 발생했을 때 처리할 핸들러 */
  const responseErrorHandler = async (error: any) => {
    console.log("client response error: ", error);
    return Promise.reject(error);
  };

  /* 요청 인터셉터 */
  const requestInterceptor = client.interceptors.request.use(
    (config) => requestHandler(config),
    (error) => requestErrorHandler(error)
  );
  /* 응답 인터셉터 */
  const responseInterceptor = client.interceptors.response.use(
    (res) => responseHandler(res),
    (error) => responseErrorHandler(error)
  );

  // 요청이 변할 때마다, 해당 인터셉터 제거
  useEffect(() => {
    return () => {
      client.interceptors.request.eject(requestInterceptor);
    };
  }, [requestInterceptor]);

  // 응답이 변할 때마다, 해당 인터셉터 제거
  useEffect(() => {
    return () => {
      client.interceptors.response.eject(responseInterceptor);
    };
  }, [responseInterceptor]);
};

export default useAxiosInterceptors;
