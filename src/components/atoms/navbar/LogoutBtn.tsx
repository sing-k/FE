import styled from "styled-components";

import color from "../../../styles/color";
import { useApi } from "../../../hooks";
import { getToken, clearTokens } from "../../../utils/auth/tokenStorage";

const LogoutBtn = () => {
  const { data, callApi, statusCode } = useApi();
  const handleLogout = async () => {
    const accessToken = getToken("accessToken"); // 액세스 토큰 가져오기
    const refreshToken = getToken("refreshToken");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    await callApi(
      "/api/auth/logout",
      "post",
      { accessToken: accessToken, refreshToken: refreshToken },
      headers,
    );
  };
  if (statusCode === 200) {
    clearTokens();
    window.location.reload();
  } else {
    console.error("로그아웃 실패:", data);
  }

  return <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>;
};

export default LogoutBtn;

const LogoutButton = styled.button`
  color: ${color.COLOR_GRAY_TEXT};
  width: 30%;
  height: 4%;
  border: 0.5px double white;
  border-radius: 5px;
  font-size: 0.6rem;
  color: #7d7d7d;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  background-color: #ffffff5b;
  box-shadow: 1px 1px 1px #96969657;
  margin-bottom: 5%;
  white-space: nowrap;
  &:hover {
    background-color: rgb(255, 123, 123);
    color: white;
    border: 0.5px solid white;
    cursor: pointer;
  }
`;
