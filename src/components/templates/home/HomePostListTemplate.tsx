import React from "react";

import styled from "styled-components";

import HomePostListHeader from "../../atoms/home/HomePostListHeader";

import { useMediaQueries } from "../../../hooks";

type Props = {
  children?: React.ReactNode;
  listHeaderText: string;
};

const HomePostListTemplate = ({ listHeaderText, children }: Props) => {
  const { isPc } = useMediaQueries();
  return (
    <Container isPc={isPc}>
      <HomePostListHeader listHeaderText={listHeaderText} />

      {children}
    </Container>
  );
};

export default HomePostListTemplate;

const Container = styled.div<{ isPc: boolean }>`
  /* width: calc(50% - 0.5rem); */
  width: ${({ isPc }) => (isPc ? "calc(50% - 0.5rem)" : "100%")};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
