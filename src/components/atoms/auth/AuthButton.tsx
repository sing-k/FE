import styled from "styled-components";

import color from "../../../styles/color";

import { ButtonType } from "../../../types/authTypes";

const AuthButton = ({
  type,
  text,
  isActive,
  disabled,
  onClick,
}: ButtonType) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      $isActive={isActive}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default AuthButton;

const Button = styled.button<{ $isActive: boolean }>`
  font-size: 0.8rem;
  font-weight: 900;
  background-color: ${props =>
    props.$isActive
      ? color.COLOR_BLUE_AUTH_BUTTON
      : color.COLOR_GRAY_INACTIVE_BUTTON};
  border-radius: 8px;
  border: none;
  padding: 2.5%;
  cursor: pointer;
  color: white;
  white-space: nowrap;
  &:active {
    transform: translateY(1px);
  }
`;
