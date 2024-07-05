import styled from "styled-components";
import color from "../../../styles/color";
import { FaChevronRight } from "react-icons/fa";

interface ModalProps {
  openModal: () => void;
}

const MyInfoButton = ({ openModal }: ModalProps) => {
  return (
    <>
      <Button onClick={openModal}>
        프로필 수정
        <Icon />
      </Button>
    </>
  );
};

export default MyInfoButton;

const Icon = styled(FaChevronRight)`
  size: 0.9rem;
  color: ${color.COLOR_GRAY_TEXT};
`;
const Button = styled.button`
  border: 1.2px solid ${color.COLOR_GRAY_TEXT};
  border-radius: 5px;
  padding: 0.2rem 1rem;
  display: flex;
  justify-content: center;
  background-color: transparent;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${color.COLOR_GRAY_TEXT};
  white-space: nowrap;
  &:hover {
    color: ${color.COLOR_DARKGRAY_TEXT};
    border: 1.2px solid ${color.COLOR_DARKGRAY_TEXT};
    cursor: pointer;
    ${Icon} {
      color: ${color.COLOR_DARKGRAY_TEXT};
    }
  }
`;
