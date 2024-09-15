import styled from "styled-components";

import { useMediaQueries } from "../../hooks";

import { IoClose } from "react-icons/io5";

export type ModalProps = {
  isOpen: boolean;
  closeModal?: () => void;
  children?: React.ReactNode;
  width?: string;
};

const Modal = ({ isOpen, closeModal, children, width }: ModalProps) => {
  const { isPc, isTablet, isMobile } = useMediaQueries();

  return (
    <ModalWrapper $isOpen={isOpen} onClick={closeModal}>
      <ModalContent
        style={{
          width: width
            ? width
            : isPc
              ? "30%"
              : isTablet
                ? "60%"
                : isMobile
                  ? "90%"
                  : "90%",
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CloseButton onClick={closeModal}>
          <IoClose />
        </CloseButton>

        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(57, 57, 57, 0.3);
  z-index: 100;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-width: 90%;
  max-height: 90%;
  padding: 1.5rem;

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const CloseButton = styled.div`
  width: max-content;
  align-self: flex-end;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;
