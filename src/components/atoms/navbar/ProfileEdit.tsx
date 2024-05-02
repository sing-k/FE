import styled from "styled-components";

import { FaUserCog } from "react-icons/fa";

const ProfileEdit = () => {
  return (
    <Container>
      <ProfileEditButton>
        <FaUserCog size="0.7rem" />
        프로필 수정
      </ProfileEditButton>
    </Container>
  );
};

export default ProfileEdit;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileEditButton = styled.button`
  width: 85%;
  font-size: 0.7rem;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
  background-color: transparent;
  color: #7d7d7d;

  &:hover {
    background-color: #ffffffc2;
  }
`;
