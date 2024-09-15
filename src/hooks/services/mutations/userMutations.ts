import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "../../../config/axios";

const token = localStorage.getItem("accessToken");

export const useProfileMutations = () => {
  const queryClient = useQueryClient();

  const uploadProfileImage = useMutation({
    mutationFn: (formData: FormData) =>
      client.put("/api/members/me/profile-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }),
    onSuccess: () => {
      console.log("프로필 사진 업로드 성공");
      queryClient.invalidateQueries({ queryKey: ["memberInfo"] });
    },
    onError: error => {
      console.error("프로필 사진 업로드 실패:", error);
    },
  });

  const deleteProfileImage = useMutation({
    mutationFn: () =>
      client.delete("/api/members/me/profile-image", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }),
    onSuccess: () => {
      console.log("프로필 사진 삭제 성공");
      queryClient.invalidateQueries({ queryKey: ["memberInfo"] });
    },
    onError: error => {
      console.error("프로필 사진 삭제 실패:", error);
    },
  });

  const updateNickname = useMutation({
    mutationFn: ({ newNickname }: { newNickname: string }) =>
      client.put(
        "/api/members/me",
        { nickname: newNickname },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ),
    onSuccess: () => {
      console.log("닉네임 변경 성공");
      queryClient.invalidateQueries({ queryKey: ["memberInfo"] });
    },
    onError: error => {
      console.error("닉네임 변경 실패:", error);
    },
  });

  return {
    uploadProfileImage,
    deleteProfileImage,
    updateNickname,
  };
};

export default useProfileMutations;
