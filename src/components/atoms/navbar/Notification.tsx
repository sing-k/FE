import styled from "styled-components";

import { IoIosNotifications } from "react-icons/io";

const Notification = () => {
  return (
    <Container>
      <ProfileEditButton>
        <IoIosNotifications size="0.7rem" />
        알림
      </ProfileEditButton>
    </Container>
  );
};

export default Notification;

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
  margin-bottom: 3%;
  &:hover {
    background-color: #ffffffc2;
  }
`;
