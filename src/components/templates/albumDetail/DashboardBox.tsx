import React from "react";

import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";

import { useMediaQueries } from "../../../hooks";

type Props = {
  text: string;
  children?: React.ReactNode;
};

const DashboardBox = ({ text, children }: Props) => {
  const { isMobile } = useMediaQueries();
  return (
    <Container className={isMobile ? "mobile" : "none"}>
      <Text>{text}</Text>

      <Contents>{children}</Contents>
    </Container>
  );
};

export default DashboardBox;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 30%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;

  &.mobile {
    width: 100%;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 1rem;
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  flex-grow: 1;
`;
