import styled from "styled-components";

import { useMediaQueries } from "../../hooks";

import { IoClose } from "react-icons/io5";

export type ModalProps = {
  isOpen: boolean;
  closeModal?: () => void;
  children?: React.ReactNode;
};

const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
  const { isPc, isTablet, isMobile } = useMediaQueries();
  return (
    <ModalWrapper $isOpen={isOpen} onClick={closeModal}>
      {isOpen && (
        <ModalContent
          style={{
            width: isPc ? "30%" : isTablet ? "60%" : isMobile ? "90%" : "90%",
          }}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <CloseButton onClick={closeModal}>
            <IoClose size="1.2rem" />
          </CloseButton>
          {children}
        </ModalContent>
      )}
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div<{ $isOpen: boolean }>`
  display: ${props => (props.$isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(57, 57, 57, 0.5);
  z-index: 20;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ModalContent = styled.div`
  position: absolute;
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 100%;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 2%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
