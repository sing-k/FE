import styled from "styled-components";

import color from "../../../styles/color";

import { ButtonType } from "../../../types/\bauthTypes";
const AuthPostButton = ({
  type,
  text,
  isActive,
  disabled,
  onClick,
}: ButtonType) => {
  return (
    <PostButton
      type={type}
      $isActive={isActive}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </PostButton>
  );
};

export default AuthPostButton;

const PostButton = styled.button<{ $isActive: boolean }>`
  width: 100%;
  font-size: 1rem;
  font-weight: 900;
  color: white;
  border: none;
  border-radius: 50px;
  background-color: ${props =>
    props.$isActive
      ? color.COLOR_BLUE_AUTH_BUTTON
      : color.COLOR_GRAY_INACTIVE_BUTTON};
  margin: 3% 0 3% 0;
  cursor: pointer;
  white-space: nowrap;
  &:active {
    transform: translateY(1px);
  }
`;
