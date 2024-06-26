import styled from "styled-components";
import color from "../../../styles/color";
import { FaChevronRight } from "react-icons/fa";
const MyInfoButton = () => {
  return (
    <Button>
      내 정보
      <FaChevronRight size={"0.9rem"} color={`${color.COLOR_GRAY_TEXT}`} />
    </Button>
  );
};

export default MyInfoButton;

const Button = styled.button`
  border: 1.2px solid ${color.COLOR_GRAY_TEXT};
  border-radius: 5px;
  padding: 0.2rem 1rem;
  display: flex;
  justify-content: center;
  background-color: transparent;
  font-size: 0.8rem;
  color: ${color.COLOR_GRAY_TEXT};
`;
