import styled from "styled-components";

import LoginForm from "../organisms/auth/LoginForm";
const LoginPage = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  background-color: white;
  padding: 3% 5%;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
