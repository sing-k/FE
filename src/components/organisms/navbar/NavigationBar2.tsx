import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";

import NavMenuList from "../../molecules/navbar/NavMenuList";
import LogoImage from "../../common/LogoImage";
import NavSignUpBtn from "./NavSignUpBtn";
import NavProfile from "../../molecules/navbar/NavProfile";
import LogoutBtn from "../../atoms/navbar/LogoutBtn";
import useModal from "../../../hooks/useModal";
import { ProfileEditModal } from "../profile";

const NavigationBar2 = ({ isLogin, data }: any) => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <Container>
      <NavBar>
        <LogoImage width="60%" />
        {isLogin === "true" && data ? (
          <NavProfile data={data} openModal={openModal} />
        ) : (
          <NavSignUpBtn />
        )}
        <NavMenuList />
        {isLogin === "true" ? <LogoutBtn /> : undefined}
      </NavBar>
      <ProfileEditModal
        userData={data}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </Container>
  );
};

export default NavigationBar2;

const Container = styled.div`
  width: 18%;
  min-width: 200px;
  position: relative;
`;

const NavBar = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;

  border-radius: 0 1rem 1rem 0;
  padding: 3rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
`;
