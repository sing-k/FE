import styled from "styled-components";

import { AuthLabel, AuthRequiredText } from "../../atoms";

import { TextType } from "../../../types/authTypes";
const FieldName = ({ text }: TextType) => {
  return (
    <Container>
      <AuthLabel text={text} />
      <AuthRequiredText />
    </Container>
  );
};

export default FieldName;

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 3% 0 3% 0;
`;
