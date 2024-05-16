import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";
import { glassEffectStyle } from "../../../styles/style";
import color from "../../../styles/color";

const NavSignUpBtn = () => {
  return (
    <Container>
      <StyledLink to="/login">로그인</StyledLink>

      <StyledLink to="/signup">회원가입</StyledLink>
    </Container>
  );
};

export default NavSignUpBtn;

const Container = styled.div`
  ${glassEffectStyle({ bgColor: "#ffffff10" })}
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 3px;
  padding: 0.5rem;
`;

const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${color.COLOR_GRAY_TEXT};
  ${glassEffectStyle()}
  padding: inherit;
  border-radius: inherit;
  transition: 0.4s;

  &:hover {
    background-color: ${color.COLOR_BLUE_AUTH_BUTTON};
    color: white;
  }
`;
