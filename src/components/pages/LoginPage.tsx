import styled from "styled-components";

import LoginForm from "../organisms/auth/LoginForm";

import { useMediaQueries } from "../../hooks";
const LoginPage = () => {
  const { isPc, isTablet, isMobile } = useMediaQueries();
  return (
    <Container>
      <LoginDiv
        style={{
          width: isPc ? "50%" : isTablet ? "70%" : isMobile ? "100%" : "100%",
        }}
      >
        <LoginForm />
        {/* 여기에 버튼들 추가  */}
      </LoginDiv>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  background-color: white;
  padding: 3% 5%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
