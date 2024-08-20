//회원 관련 api 함수
import client from "../config/axios";
import { getDefaultDates } from "../utils/date";
import { ActivityListType } from "../types/activityHistoryType";
import { UserDataType } from "../types/authTypes";
import { checkAPIResponseValidation } from ".";

//회원 정보 조회
export const getMemberInfo = async (): Promise<UserDataType | null> => {
  try {
    const response = await client.get("/api/members/me");
    if (response.data.statusCode !== 200) {
      throw new Error(response.data.message || "Unknown error");
    }
    return response.data.data;
  } catch (error) {
    console.error("API 호출 중 오류가 발생했습니다.", error);
    return null;
  }
};

//프로필 이미지 업로드
export const uploadProfileImage = (formData: FormData) => {
  return client.put("/api/members/me/profile-image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
//프로필 이미지 삭제
export const deleteProfileImage = () => {
  return client.delete("/api/members/me/profile-image", {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
//닉네임 수정
export const updateNickname = ({ newNickname }: { newNickname: string }) => {
  return client.put("/api/members/me", { nickname: newNickname });
};

export const getHistoryGraph = async (
  startDate?: string,
  endDate?: string,
  type: "DAILY" | "WEEKLY" | "MONTHLY" = "DAILY"
) => {
  try {
    const { startDate: defaultStartDate, endDate: defaultEndDate } =
      getDefaultDates();
    const response = await client.get("/api/activity/graph", {
      params: {
        startDate: startDate || defaultStartDate,
        endDate: endDate || defaultEndDate,
        type,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("활동 그래프를 불러올 수 없습니다.", error);
    return null;
  }
};

export const getActivityList = async (
  offset: number,
  limit: number
): Promise<ActivityListType> => {
  const response = await client.get("/api/activity/list", {
    params: { offset, limit },
  });
  return response.data.data;
};

export const logoutRequest = async () => {
  const res = await client.post(`/api/auth/logout`);

  checkAPIResponseValidation(res);
};
