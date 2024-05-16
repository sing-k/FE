import styled from "styled-components";

import { TextType } from "../../../types/authTypes";
const AuthLabel = ({ text }: TextType) => {
  return <Title>{text}</Title>;
};

export default AuthLabel;

const Title = styled.label`
  font-size: 0.9rem;
  font-weight: 900;
`;
