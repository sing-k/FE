import styled from "styled-components";

import { AuthTitle, AuthLink, AuthExplainText } from "../../atoms";

type TextType = {
  text: string;
  linkTitle: string;
};

const TitleLink = ({ text, linkTitle }: TextType) => {
  return (
    <Container>
      <AuthTitle text={text} />
      <div>
        <AuthExplainText text="SingK 계정이 있으신가요?" />
        <AuthLink text={linkTitle} />
      </div>
    </Container>
  );
};

export default TitleLink;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10%;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
