import styled from "styled-components";

import color from "../../../styles/color";

type ErrorType = {
  text?: any | undefined;
  isValid?: boolean;
};

const AuthValidMessage = ({ text, isValid }: ErrorType) => {
  return <ValidMessage $isValid={isValid}>{text}</ValidMessage>;
};

export default AuthValidMessage;

const ValidMessage = styled.div<{ $isValid?: boolean }>`
  width: 100%;
  text-align: end;
  font-size: 0.6rem;
  color: ${props =>
    props.$isValid ? color.COLOR_GREEN_VALID : color.COLOR_RED_INVALID};
`;
