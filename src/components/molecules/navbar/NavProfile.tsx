import styled from "styled-components";

import NavbarProfileImg from "../../atoms/navbar/NavbarProfileImg";
import NavbarRating from "../../atoms/navbar/NavbarRating";
import NavbarNickname from "../../atoms/navbar/NavbarNickname";
import NavbarTag from "../../atoms/navbar/NavbarTag";
import ActivityHistory from "../../atoms/navbar/ActivityHistory";
import ProfileEdit from "../../atoms/navbar/ProfileEdit";
import Notification from "../../atoms/navbar/Notification";

const NavProfile = () => {
  return (
    <NavProfileDiv>
      <NavbarProfileImg />
      <NickNameRating>
        <NavbarRating />
        <NavbarNickname />
      </NickNameRating>
      <NavbarTag />
      <ActivityHistory />
      <ProfileEdit />
      <Notification />
    </NavProfileDiv>
  );
};

export default NavProfile;

const NavProfileDiv = styled.div`
  width: 90%;
  /* flex-basis: 40%; */
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
const NickNameRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  gap: 2%;
  margin-bottom: 3%;
`;
