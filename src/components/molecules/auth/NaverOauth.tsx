import styled from "styled-components";

import color from "../../../styles/color";

import { SiNaver } from "react-icons/si";

const NaverOauth = () => {
  const link = "http://3.34.143.154:8080/oauth2/authorization/naver";

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <OauthBtn type="button" className="OauthBtn" onClick={loginHandler}>
      <SiNaver size="1rem" color="green" />
      네이버 계정으로 로그인 하기
    </OauthBtn>
  );
};

export default NaverOauth;

const OauthBtn = styled.button`
  display: inline-block;
  border: 3px solid ${color.COLOR_BLUE_AUTH_BUTTON};
  background-color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  padding: 10px 24px;
  cursor: pointer;
  border-radius: 30px;
  margin-top: 0.2rem;

  &:hover {
    filter: brightness(95%);
  }
`;
