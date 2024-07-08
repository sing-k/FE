//유저 관련 리액트 쿼리
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  getMemberInfo,
  uploadProfileImage,
  updateNickname,
  deleteProfileImage,
} from "../../api/user";

//회원 정보 get
export const useMemberInfoQuery = () => {
  return useQuery({
    queryKey: ["memberInfo"],
    queryFn: getMemberInfo,
  });
};
//프로필 이미지 수정
export const useUploadProfileImageMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (formData: FormData) => uploadProfileImage(formData),
    onSuccess: () => {
      console.log("프로필 사진 업로드 성공");
      queryClient.invalidateQueries({ queryKey: ["memberInfo"] });
    },
    onError: error => {
      console.error("프로필 사진 업로드 실패:", error);
    },
  });
};
//프로필 이미지 삭제
export const useDeleteProfileImageMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteProfileImage(),
    onSuccess: () => {
      console.log("프로필 사진 삭제 성공");
      queryClient.invalidateQueries({ queryKey: ["memberInfo"] });
    },
    onError: error => {
      console.error("프로필 사진 삭제 실패:", error);
    },
  });
};
//닉네임 변경
export const useUpdateNicknameMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ newNickname }: { newNickname: string }) =>
      updateNickname({ newNickname }),
    onSuccess: () => {
      console.log("닉네임 변경 성공");
      queryClient.invalidateQueries({ queryKey: ["memberInfo"] });
    },
    onError: error => {
      console.error("닉네임 변경 실패:", error);
    },
  });
};
