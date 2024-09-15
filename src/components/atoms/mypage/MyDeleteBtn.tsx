import styled from "styled-components";
import color from "../../../styles/color";
interface DeleteButtonProps {
  onClick?: () => void;
}

const MyDeleteBtn = ({ onClick }: DeleteButtonProps) => {
  return <StyledButton onClick={onClick}>삭제</StyledButton>;
};

export default MyDeleteBtn;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${color.COLOR_GRAY_TEXT};
  cursor: pointer;
  font-size: 0.8rem;
  text-decoration: underline;
  text-align: end;
  padding: 0;
  &:hover {
    color: ${color.COLOR_DARKGRAY_TEXT};
  }

  &:focus {
    outline: none;
  }
`;
