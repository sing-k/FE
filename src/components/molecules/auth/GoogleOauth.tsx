import styled from "styled-components";
import color from "../../../styles/color";
import { FaGoogle } from "react-icons/fa";

const GoogleOauth = () => {
  const link = "http://3.34.143.154:8080/oauth2/authorization/google";
  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <OauthBtn type="button" className="OauthBtn" onClick={loginHandler}>
      <GoogleIcon size="1rem" />
      　구글 계정으로 로그인 하기
    </OauthBtn>
  );
};

export default GoogleOauth;

const OauthBtn = styled.button`
  display: inline-block;
  width: 90%;
  font-size: 1rem;
  font-weight: 600;
  color: black;
  border: 3px solid ${color.COLOR_BLUE_AUTH_BUTTON};
  border-radius: 50px;
  background-color: white;
  text-align: center;
  text-decoration: none;
  padding: 10px 24px;

  cursor: pointer;
  border-radius: 30px;
  margin-top: 0.2rem;
  white-space: nowrap;
  &:hover {
    filter: brightness(95%);
  }
`;
s;

const GoogleIcon = styled(FaGoogle)`
  paddings-top: 0.2rem; /* Adjust this value to move the icon down */
`;
