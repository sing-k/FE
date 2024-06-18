import React from "react";

import styled from "styled-components";

import WritePostHeader from "../molecules/board/WritePostHeader";
import WritePostFooter from "../molecules/board/WritePostFooter";

type Props = {
  headerText: string;
  children?: React.ReactNode;
  onClickPreview?: () => void;
  onClickSubmit?: () => void;
};

const WritePostLayout = ({
  headerText,
  children,
  onClickPreview,
  onClickSubmit,
}: Props) => {
  return (
    <Layout>
      <WritePostHeader headerText={headerText} />

      <Contents>{children}</Contents>

      <WritePostFooter
        onClickPreview={onClickPreview}
        onClickSubmit={onClickSubmit}
      />
    </Layout>
  );
};

export default WritePostLayout;

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  position: relative;
  padding: 6rem 1rem 10rem;
`;

const Contents = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;
