import styled from "styled-components";
import color from "../../../styles/color";

interface BoardType {
  type: string;
}

const MyBoardType = ({ type }: BoardType) => {
  return <StyledType>{type}</StyledType>;
};

export default MyBoardType;

const StyledType = styled.div`
  font-size: 0.7rem;
  color: ${color.COLOR_MAIN};
  border: 1px solid ${color.COLOR_MAIN};
  border-radius: 5px;
  padding: 0.2rem;
`;
