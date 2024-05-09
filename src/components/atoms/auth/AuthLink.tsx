import styled from "styled-components";

import color from "../../../styles/color";

import { TextType } from "../../../types/\bauthTypes";
const AuthLink = ({ text }: TextType) => {
  return <LinkTitle>{text}</LinkTitle>;
};

export default AuthLink;

const LinkTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 800;
  color: ${color.COLOR_BLUE_AUTH_BUTTON};
  cursor: pointer;
`;
