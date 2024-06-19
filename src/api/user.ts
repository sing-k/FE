//회원 관련 api 함수
import client from "../config/axios";

//회원 정보 조회
export const getMemberInfo = async () => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  const response = await client.get("/api/members/me", { headers });
  return response.data.data;
};
//프로필 이미지 업로드
export const uploadProfileImage = (formData: FormData) => {
  const token = localStorage.getItem("accessToken");
  return client.put("/api/members/me/profile-image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};
//프로필 이미지 삭제
export const deleteProfileImage = () => {
  const token = localStorage.getItem("accessToken");
  return client.delete("/api/members/me/profile-image", {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};
//닉네임 수정
export const updateNickname = ({ newNickname }: { newNickname: string }) => {
  const token = localStorage.getItem("accessToken");
  return client.put(
    "/api/members/me",
    { nickname: newNickname },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
