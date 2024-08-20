import styled from "styled-components";

import color from "../../../styles/color";

import { useLogoutMutation } from "../../../hooks/queries/user";

const LogoutBtn = () => {
  const logoutMutation = useLogoutMutation();

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>;
};

export default LogoutBtn;

const LogoutButton = styled.button`
  color: ${color.COLOR_GRAY_TEXT};
  padding: 0.3rem 0.6rem;
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
