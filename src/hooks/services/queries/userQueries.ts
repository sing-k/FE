// 유저 관련 데이터 get 요청 쿼리를 저장
import { useQuery } from "@tanstack/react-query";
import client from "../../../config/axios";

const fetchMemberInfo = async () => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  const response = await client.get("/api/members/me", { headers });
  return response.data.data;
};

export const useMemberInfoQuery = () => {
  const token = localStorage.getItem("accessToken");
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["memberInfo"],
    queryFn: fetchMemberInfo,
    enabled: !!token, // 토큰이 있을 때만 쿼리를 실행
  });

  return { isLoading, isError, data, error };
};
