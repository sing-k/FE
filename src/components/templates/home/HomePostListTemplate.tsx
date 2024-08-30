import React from "react";

import styled from "styled-components";

import HomePostListHeader from "../../atoms/home/HomePostListHeader";

type Props = {
  children?: React.ReactNode;
  listHeaderText: string;
};

const HomePostListTemplate = ({ listHeaderText, children }: Props) => {
  return (
    <Container>
      <HomePostListHeader listHeaderText={listHeaderText} />

      {children}
    </Container>
  );
};

export default HomePostListTemplate;

const Container = styled.div`
  width: calc(50% - 1rem);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
