import styled from "styled-components";

import { OauthSignUpForm } from "../organisms";

const OauthSignUpPage = () => {
  return (
    <Container>
      <OauthSignUpForm />
    </Container>
  );
};

export default OauthSignUpPage;

const Container = styled.div`
  background-color: white;
  padding: 3% 5%;
  width: 100vw;
  margin: 0 auto;
`;
