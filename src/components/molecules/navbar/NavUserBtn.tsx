import styled from "styled-components";
import NavbarBtn from "../../atoms/navbar/NavbarBtn";
import Modal from "../../common/Modal";
import useModal from "../../../hooks/useModal";

const NavUserBtn = () => {
  const {
    isOpen: isLoginModalOpen,
    openModal: openLoginModal,
    closeModal: closeLoginModal,
  } = useModal();
  const {
    isOpen: isSignupModalOpen,
    openModal: openSignupModal,
    closeModal: closeSignupModal,
  } = useModal();

  return (
    <Container>
      <NavbarBtn title="로그인" onClick={openLoginModal} />
      <NavbarBtn title="회원가입" onClick={openSignupModal} />
      <Modal isOpen={isLoginModalOpen} closeModal={closeLoginModal}>
        <div>로그인모달</div>
      </Modal>
      <Modal isOpen={isSignupModalOpen} closeModal={closeSignupModal}>
        <div>회원가입모달</div>
      </Modal>
    </Container>
  );
};

export default NavUserBtn;

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff12;
  border-radius: 10px;
  box-shadow: inset 0 0 1px 1px rgba(99, 99, 99, 0.169);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  padding: 2%;
  margin-bottom: 5%;
`;
