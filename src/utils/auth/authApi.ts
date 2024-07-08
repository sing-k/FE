import client from "../../config/axios";
import { FormType, LoginType } from "../../types/authTypes";
export const handleSendVerificationCode = async (email: string) => {
  try {
    const res = await client.post("/api/auth/certification/request", email, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 오류가 발생했습니다.", error);
  }
};

export const handleVerificationCodeConfirmation = async (
  email: string,
  code: string,
) => {
  try {
    const res = await client.post("/api/auth/certification/confirm", {
      email: email,
      code: code,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 오류가 발생했습니다.", error);
  }
};

export const handelCheckNickNameExists = async (nickname: string) => {
  try {
    const res = await client.post("/api/auth/nickname/confirm", nickname, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    return res.data;
  } catch (error) {
    console.error("API 호출 중 오류가 발생했습니다.", error);
  }
};

export const handleSubmitData = async (data: FormType) => {
  const { email, name, password, birthday, gender, nickname } = data;
  try {
    const res = await client.post("/api/auth/signup", {
      email: email,
      password: password,
      nickname: nickname,
      birthday: birthday,
      gender: gender,
      name: name,
    });
    console.log("API 호출 성공:", res); // API 호출 성공 여부 확인
    return res.data;
  } catch (error: unknown) {
    console.error("API 호출 중 오류가 발생했습니다.", error);
    if (error instanceof Error && (error as any).response) {
      const response = (error as any).response;
      return {
        statusCode: response.status,
        message: response.data.message,
      };
    } else {
      throw error; // 에러를 던져서 호출한 곳에서 처리할 수 있도록 함
    }
  }
};

export const handleSubmitLogin = async (data: LoginType) => {
  const { email, password } = data;
  try {
    const res = await client.post("/api/auth/login", {
      email: email,
      password: password,
    });
    console.log(res.data);
    return res.data.statusCode;
  } catch (error) {
    console.error("API 호출 중 오류가 발생했습니다.", error);
  }
};
