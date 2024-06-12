import { useState } from "react";

import styled from "styled-components";

import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import { useMediaQueries } from "../../../hooks";
import {
  AuthPostButton,
  AuthInput,
  AuthButton,
  AuthValidMessage,
  AuthCalendar,
} from "../../atoms";
import { FieldName, GenderForm, TitleLink } from "../../molecules";
import { validationRules } from "../../../utils/auth/validationRules";
import {
  handleSendVerificationCode,
  handelCheckNickNameExists,
  handleVerificationCodeConfirmation,
  handleSubmitData,
} from "../../../utils/auth/authApi";

import { FormType } from "../../../types/authTypes";
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormType>({ mode: "onBlur" });
  const [isVerificationCodeSent, setIsVerificationCodeSent] =
    useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isNicknameValid, setIsNicknameValid] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState<string>("");
  const { isPc, isTablet, isMobile } = useMediaQueries();
  const navigate = useNavigate();
  const handleSendVerificationCodeClick = async () => {
    try {
      const response = await handleSendVerificationCode(watch("email"));
      if (response && response.statusCode === 200) {
        setIsVerificationCodeSent(true); // 성공 시 상태 변경
        setEmailErrorMessage("");
      } else {
        setEmailErrorMessage(response.message);
      }
    } catch (error) {
      console.error("API 호출 중 오류가 발생했습니다.", error);
    }
  };

  const handleVerificationCodeConfirmationClick = async () => {
    try {
      const response = await handleVerificationCodeConfirmation(
        watch("email"),
        watch("emailcode")
      );
      if (response && response.statusCode === 200) {
        setIsEmailValid(true);
        setEmailErrorMessage("");
      } else {
        setEmailErrorMessage(response.message);
      }
    } catch (error) {
      console.error("API 호출 중 오류가 발생했습니다.", error);
    }
  };
  const handelCheckNickNameExistsClick = async () => {
    try {
      const response = await handelCheckNickNameExists(watch("nickname"));
      if (response && response.statusCode === 200) {
        setIsNicknameValid(true); // 성공 시 상태 변경
        setNicknameErrorMessage(""); // 에러 메시지 초기화
      } else {
        setIsNicknameValid(false); // 실패 시 상태 변경
        setNicknameErrorMessage(response.message); // 에러 메시지 설정
      }
    } catch (error) {
      console.error("API 호출 중 오류가 발생했습니다.", error);
    }
  };
  const handleGenderChange = (gender: string) => {
    setValue("gender", gender); // 선택된 성별 값을 설정
  };

  const handelDateChange = (date: string) => {
    setValue("birthday", date);
  };
  const handleValid = async (data: FormType) => {
    try {
      const result = await handleSubmitData(data);
      if (result === 200) {
        alert("회원가입을 완료하였습니다. 로그인 페이지로 이동합니다.");
        navigate("/login");
      }
    } catch (err) {
      console.log(err, "err");
      alert("입력사항을 확인해주세요 ");
    }
  };

  const handleError = (errors: any) => console.error(errors);
  return (
    <Container
      style={{
        width: isPc ? "50%" : isTablet ? "70%" : isMobile ? "100%" : "100%",
      }}
    >
      <form method="post" onSubmit={handleSubmit(handleValid, handleError)}>
        <TitleLink text="회원가입" linkTitle="로그인" link="/login" />
        <FieldName text="이름" />
        <AuthInput
          name="name"
          placeholder="이름을 입력해주세요"
          register={register("name", validationRules.name)}
        ></AuthInput>
        <ValidDiv>
          {errors.name && (
            <AuthValidMessage text={errors.name?.message}></AuthValidMessage>
          )}
        </ValidDiv>
        <FieldName text="이메일" />
        <AuthInput
          name="email"
          register={register("email", validationRules.email)}
          placeholder="이메일을 입력해주세요"
        />

        <ColumContainer>
          <AuthInput
            name="emailcode"
            register={register("emailcode", validationRules.emailcode)}
            placeholder="인증번호 6자리"
            disabled={!isVerificationCodeSent}
          />

          {errors.email || !watch("email") ? (
            <AuthButton
              type="button"
              text="인증번호 전송"
              isActive={false}
              disabled={true}
            />
          ) : (
            // 에러가 없으면 버튼을 활성화
            <AuthButton
              type="button"
              text={isVerificationCodeSent ? "인증번호 확인" : "인증번호 전송"}
              isActive={true}
              onClick={
                isVerificationCodeSent
                  ? handleVerificationCodeConfirmationClick
                  : handleSendVerificationCodeClick
              }
            />
          )}
        </ColumContainer>
        <ValidDiv>
          {errors.email ? (
            <AuthValidMessage text={errors.email.message}></AuthValidMessage>
          ) : (
            <AuthValidMessage text={emailErrorMessage}></AuthValidMessage>
          )}
          {errors.emailcode && (
            <AuthValidMessage
              text={errors.emailcode.message}
            ></AuthValidMessage>
          )}
          {isEmailValid && (
            <AuthValidMessage
              text="*이메일이 인증되었습니다."
              isValid={isEmailValid}
            />
          )}
        </ValidDiv>
        <FieldName text="비밀번호" />
        <AuthInput
          name="password"
          register={register("password", validationRules.password)}
          placeholder="영문 대소문자, 숫자, 특수문자 포함 최소 8자리"
          type="password"
        />
        <AuthInput
          name="passwordConfirm"
          register={register("passwordConfirm", {
            required: true,
            validate: (value) =>
              watch().password !== value
                ? "비밀번호가 일치하지 않습니다"
                : true,
          })}
          type="password"
          placeholder="비밀번호를 확인해주세요"
        />
        <ValidDiv>
          {errors.password && (
            <AuthValidMessage
              text={errors.password?.message}
            ></AuthValidMessage>
          )}
          {!errors.password && errors.passwordConfirm && (
            <AuthValidMessage
              text={errors.passwordConfirm?.message}
            ></AuthValidMessage>
          )}
          {!errors.password &&
            !errors.passwordConfirm &&
            watch("password") &&
            watch("passwordConfirm") &&
            (watch("password") === watch("passwordConfirm") ? (
              <AuthValidMessage
                text="*비밀번호가 일치합니다."
                isValid={true}
              ></AuthValidMessage>
            ) : undefined)}
        </ValidDiv>
        <FieldName text="닉네임" />
        <ColumContainer>
          <AuthInput
            name="nickname"
            register={register("nickname", validationRules.nickname)}
            placeholder="닉네임을 입력해주세요"
          />
          {errors.nickname || !watch("nickname") ? (
            <AuthButton
              type="button"
              text="중복 확인"
              isActive={false}
              disabled={true}
            />
          ) : (
            <AuthButton
              type="button"
              text="중복 확인"
              isActive={true}
              onClick={handelCheckNickNameExistsClick}
            />
          )}
        </ColumContainer>
        <ValidDiv>
          {errors.nickname ? (
            <AuthValidMessage text={errors.nickname.message}></AuthValidMessage>
          ) : isNicknameValid ? (
            <AuthValidMessage
              text="*사용 가능한 닉네임입니다."
              isValid={isNicknameValid}
            />
          ) : (
            <AuthValidMessage text={nicknameErrorMessage} />
          )}
        </ValidDiv>
        <FieldName text="생년월일" />
        <AuthCalendar onDateChange={handelDateChange} />
        <FieldName text="성별" />
        <GenderForm onGenderChange={handleGenderChange} />
        <AuthPostButton
          type="submit"
          text="회원가입"
          isActive={isValid}
          disabled={!isValid}
        />
      </form>
    </Container>
  );
};

export default SignUpForm;

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 3% 5%;
  /* width: 50%; */
  margin: auto;
`;

const ColumContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  margin: 2% 0 2% 0;
`;
const ValidDiv = styled.div`
  width: 100%;
  min-height: 10px;
`;
