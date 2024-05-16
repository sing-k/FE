import styled from "styled-components";

import { SignUpForm } from "../organisms";

const SignUpPage = () => {
  return (
    <Container>
      <SignUpForm />
    </Container>
  );
};

export default SignUpPage;

const Container = styled.div`
  background-color: white;
  padding: 3% 5%;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;
