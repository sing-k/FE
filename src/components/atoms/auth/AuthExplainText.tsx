import styled from "styled-components";

import { TextType } from "../../../types/authTypes";

const AuthExplainText = ({ text }: TextType) => {
  return <ExplainText>{text}</ExplainText>;
};

export default AuthExplainText;

const ExplainText = styled.div`
  font-size: 0.8rem;
  color: #909090;
  font-weight: 800;
`;
