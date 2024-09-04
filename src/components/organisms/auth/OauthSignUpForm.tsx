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
import { handelCheckNickNameExists } from "../../../utils/auth/authApi";

import { OauthFormType } from "../../../types/authTypes";
import { pathName } from "../../../App";
import { useUpdateUserMutation } from "../../../hooks/queries/user";

const OauthSignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<OauthFormType>({
    mode: "onBlur",
    defaultValues: {
      gender: "MALE", // 남성을 기본값으로 설정
    },
  });
  const [isNicknameValid, setIsNicknameValid] = useState<boolean>(false);
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState<string>("");
  const { isPc, isTablet, isMobile } = useMediaQueries();
  const navigate = useNavigate();
  const mutation = useUpdateUserMutation();

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
  const handleValid = (data: OauthFormType) => {
    mutation.mutate(data, {
      onSuccess: () => {
        alert("회원가입이 성공적으로 완료되었습니다.");
        navigate(`${pathName.home}`);
        window.location.reload(); //새로고침 추가
      },
      onError: error => {
        alert("입력사항을 확인해주세요");
        console.error("회원정보 변경 실패:", error);
      },
    });
  };

  const handleError = (errors: any) => console.error(errors);
  return (
    <Container
      style={{
        width: isPc ? "50%" : isTablet ? "70%" : isMobile ? "100%" : "100%",
      }}
    >
      <form method="post" onSubmit={handleSubmit(handleValid, handleError)}>
        <TitleLink
          title="Oauth 회원가입"
          text="가입을 위해 추가 정보를 기입해주세요!"
          linkTitle=""
          link=""
        />
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
        <AuthCalendar
          onDateChange={handelDateChange}
          register={register("birthday", validationRules.birthday)}
        />
        <ValidDiv>
          {errors.birthday ? (
            <AuthValidMessage text={errors.birthday.message}></AuthValidMessage>
          ) : undefined}
        </ValidDiv>
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

export default OauthSignUpForm;

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
