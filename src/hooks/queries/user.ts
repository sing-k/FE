//유저 관련 리액트 쿼리
import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import {
  ActivityDataType,
  ActivityListType,
} from "../../types/activityHistoryType";
import {
  getMemberInfo,
  uploadProfileImage,
  updateNickname,
  deleteProfileImage,
  getHistoryGraph,
  getActivityList,
  logoutRequest,
} from "../../api/user";

import { clearTokens, getLoginState } from "../../utils/auth/tokenStorage";
import { pathName } from "../../App";

//회원 정보 get
export const useMemberInfoQuery = () => {
  const isLogin = getLoginState();

  return useQuery({
    queryKey: ["memberInfo"],
    queryFn: getMemberInfo,
    enabled: !!isLogin,
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
    onError: (error) => {
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
    onError: (error) => {
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
    onError: (error) => {
      console.error("닉네임 변경 실패:", error);
    },
  });
};

//활동히스토리 그래프 조회
export const useActivityHistoryGraphQuery = (
  startDate?: string,
  endDate?: string,
  type: "DAILY" | "WEEKLY" | "MONTHLY" = "DAILY"
) => {
  return useQuery<ActivityDataType[], Error>({
    queryKey: ["historyGraph", { startDate, endDate, type }],
    queryFn: () => getHistoryGraph(startDate, endDate, type),
    enabled: !!startDate && !!endDate,
  });
};

export const useActivityListQuery = (offset: number, limit: number) => {
  return useQuery<ActivityListType, Error>({
    queryKey: ["activityList", offset, limit],
    queryFn: () => getActivityList(offset, limit),
    placeholderData: keepPreviousData,
  });
};

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["memberInfo"],
        refetchType: "none",
      });

      clearTokens();
      window.location.replace(`${pathName.home}`);
    },
  });
};
