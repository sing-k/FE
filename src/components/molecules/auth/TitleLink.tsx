import styled from "styled-components";

import { AuthTitle, AuthLink, AuthExplainText } from "../../atoms";

import { Link } from "react-router-dom";

type TextType = {
  text: string;
  linkTitle: string;
  link: string;
};

const TitleLink = ({ text, linkTitle, link }: TextType) => {
  return (
    <Container>
      <AuthTitle text={text} />
      <div>
        <AuthExplainText text="SingK 계정이 있으신가요?" />
        <Link to={link}>
          <AuthLink text={linkTitle} />
        </Link>
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
