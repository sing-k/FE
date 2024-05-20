import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { AuthPostButton, AuthInput, AuthValidMessage } from "../../atoms";
import { TitleLink } from "../../molecules";
import { validationRules } from "../../../utils/auth/validationRules";

import useLogin from "../../../hooks/useLogin";

import { LoginType } from "../../../types/authTypes";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginType>({ mode: "onBlur" });

  const { login, isLoading, error } = useLogin();
  const [errorMessage, setErrorMessage] = useState<string | null>("");

  const navigate = useNavigate();

  const handleValid = async () => {
    const email = watch("email");
    const password = watch("password");
    const data: LoginType = { email, password };
    const response = await login("/api/auth/login", data);
    console.log(response);
    if (response.statusCode === 401) {
      setErrorMessage(error);
    } else {
      setErrorMessage("");
      alert("로그인에 성공했습니다.");
      navigate("/"); // 로그인 성공 시 대시보드로 이동
    }
  };
  useEffect(() => {
    const subscription = watch(() => {
      setErrorMessage(null);
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  useEffect(() => {
    setErrorMessage(error);
  }, [error]);
  const handleError = (errors: any) => console.error(errors);
  return (
    <Container>
      <form method="post" onSubmit={handleSubmit(handleValid, handleError)}>
        <TitleLink text="로그인" linkTitle="회원가입" link="/signup" />
        <AuthInput
          name="email"
          register={register("email", validationRules.email)}
          placeholder="이메일 입력"
        />
        <AuthInput
          name="password"
          register={register("password", {
            required: {
              value: true,
              message: "비밀번호를 입력해주세요.",
            },
          })}
          placeholder="비밀번호 입력"
          type="password"
        />
        <ValidDiv>
          {errors.email && <AuthValidMessage text={errors.email.message} />}
          {errors.password && (
            <AuthValidMessage text={errors.password.message} />
          )}

          <AuthValidMessage text={errorMessage} />
        </ValidDiv>

        <AuthPostButton
          type="submit"
          text="로그인"
          isActive={true}
          disabled={isLoading}
        />
      </form>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
  background-color: white;
  padding: 5%;
  width: 100%;
`;

const ValidDiv = styled.div`
  width: 100%;
  min-height: 10px;
`;
