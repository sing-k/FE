import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";

import NavbarProfileImg from "../../atoms/navbar/NavbarProfileImg";
import NavbarRating from "../../atoms/navbar/NavbarRating";
import NavbarNickname from "../../atoms/navbar/NavbarNickname";
import NavbarTag from "../../atoms/navbar/NavbarTag";
import NavProfileBtn from "../../atoms/navbar/NavProfileBtn";

import { FaBell, FaUserCog } from "react-icons/fa";
import { pathName } from "../../../App";

const NavProfile = ({ data }: any) => {
  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate(`${pathName.myPage}`);
  };
  return (
    <NavProfileDiv>
      <NavbarProfileImg data={data} />

      <NickNameRating>
        <NavbarRating />
        <NavbarNickname data={data} />
      </NickNameRating>

      <NavbarTag />

      <BtnWrapper>
        <NavProfileBtn
          onClick={handelNavigate}
          Icon={FaUserCog}
          text="마이 페이지"
        />
        {/* <NavProfileBtn
          onClick={openModal}
          Icon={FaUserCog}
          text="프로필 수정"
        /> */}
        <NavProfileBtn Icon={FaBell} text="알림" />
      </BtnWrapper>
    </NavProfileDiv>
  );
};

export default NavProfile;

const NavProfileDiv = styled.div`
  ${glassEffectStyle({ bgColor: "#ffffff10" })}
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.7rem;
  border-radius: 5px;
  // box-shadow: inset 0 0 1px 1px rgba(99, 99, 99, 0.169);

  padding: 1rem 0.7rem;
`;
const NickNameRating = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  gap: 3%;
  font-size: 0.9rem;
`;

const BtnWrapper = styled.div`
  width: 100%;
`;
