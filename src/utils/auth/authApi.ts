import client from "../../config/axios";

export const handleSendVerificationCode = async (email: any) => {
  try {
    const res = await client.post(
      "/api/auth/email-authentication/request",
      email,
      {
        headers: {
          "Content-Type": "text/plain",
        },
      },
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 오류가 발생했습니다.", error);
  }
};

export const handleVerificationCodeConfirmation = async (
  email: any,
  code: any,
) => {
  try {
    const res = await client.post("/api/auth/email-authentication/confirm", {
      email: email,
      code: code,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 오류가 발생했습니다.", error);
  }
};

export const handelCheckNickNameExists = async (nickname: any) => {
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

export const handleSubmitData = async (data: any) => {
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
    return res.data.statusCode;
  } catch (error) {
    console.error("API 호출 중 오류가 발생했습니다.", error);
  }
};

export const handleSubmitLogin = async (data: any) => {
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
