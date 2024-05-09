import styled from "styled-components";

import { TextType } from "../../../types/authTypes";

const AuthTitle = ({ text }: TextType) => {
  return <Title>{text}</Title>;
};

export default AuthTitle;

const Title = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: black;
  text-align: center;
  margin-bottom: 3%;
`;
