import styled from "styled-components";
import color from "../../../styles/color";

interface BoardType {
  type: string;
}

const MyBoardType = ({ type }: BoardType) => {
  return <StyledType type={type}>{type}</StyledType>;
};

export default MyBoardType;

const StyledType = styled.div<{ type: string }>`
  font-size: 0.8rem;
  color: ${({ type }) =>
    type === "대댓글" ? color.COLOR_DARKGRAY_TEXT : color.COLOR_MAIN};
  border: 1px solid
    ${({ type }) =>
      type === "대댓글" ? color.COLOR_DARKGRAY_TEXT : color.COLOR_MAIN};
  border-radius: 5px;
  padding: 0.2rem;
  white-space: nowrap;
`;
