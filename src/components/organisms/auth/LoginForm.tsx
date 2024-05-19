import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useMediaQueries } from "../../../hooks";
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
    formState: { errors, isValid },
  } = useForm<LoginType>({ mode: "onBlur" });

  const { isPc, isTablet, isMobile } = useMediaQueries();
  const { login, isLoading, error } = useLogin();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleValid = async () => {
    const email = watch("email");
    const password = watch("password");
    const data: LoginType = { email, password };
    const response = await login("/api/auth/login", data);
    console.log(response);
    if (response.data === 200) {
      setErrorMessage("");
      alert("로그인에 성공했습니다.");
      navigate("/"); // 로그인 성공 시 대시보드로 이동
    } else {
      setErrorMessage(response.message);
      alert(error || "로그인에 실패했습니다. 입력사항을 확인해주세요.");
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
        <TitleLink text="로그인" linkTitle="회원가입" link="/signup" />
        <AuthInput
          name="email"
          register={register("email", validationRules.email)}
          placeholder="이메일 입력"
        />
        <AuthInput
          name="password"
          register={register("password", validationRules.password)}
          placeholder="비밀번호 입력"
          type="password"
        />
        <ValidDiv>
          {errors.email && (
            <AuthValidMessage text="이메일 형식으로 입력해주세요." />
          )}
          {errorMessage}
          {/* api 요청 후 에러메세지 */}
        </ValidDiv>

        <AuthPostButton
          type="submit"
          text="로그인"
          isActive={isValid}
          disabled={!isValid || isLoading}
        />
      </form>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 3% 5%;
  /* width: 50%; */
  margin: auto;
`;

const ValidDiv = styled.div`
  width: 100%;
  min-height: 10px;
`;
