import styled from "styled-components";

import color from "../../../styles/color";

import { ButtonType } from "../../../types/authTypes";
const AuthGenderButton = ({ type, text, isActive, onClick }: ButtonType) => {
  return (
    <StyledButton type={type} onClick={onClick} $isActive={isActive}>
      {text}
    </StyledButton>
  );
};

export default AuthGenderButton;

const StyledButton = styled.button<{ $isActive: boolean }>`
  width: 100%;
  background-color: ${props =>
    props.$isActive ? color.COLOR_BLUE_AUTH_BUTTON : "#efefef"};
  color: ${props =>
    props.$isActive ? "white" : color.COLOR_LIGHT_GRAY_PLACEHOLDER};
  padding: 2%;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  margin: 2% 0 2% 0;
  cursor: pointer;
  white-space: nowrap;
  transition: 0.4s;
  &:hover {
    background-color: ${color.COLOR_BLUE_AUTH_BUTTON};
    color: white;
  }

  &:focus {
    outline: none;
  }
`;
