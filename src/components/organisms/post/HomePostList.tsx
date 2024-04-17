import React from "react";

import styled from "styled-components";

import { PostListHeader } from "../../atoms";
import { PostListItem } from "../../molecules";

type Props = {
  text: string;
};

const HomePostList = (props: Props) => {
  return (
    <Container>
      <PostListHeader text={props.text} />

      <ListWrapper>
        {[...new Array(5).fill(0)].map((el, idx) => (
          <PostListItem key={`postListItem${idx}`} />
        ))}
      </ListWrapper>
    </Container>
  );
};

export default HomePostList;

const Container = styled.div`
  //   width: 50%;
  flex: 1;
`;

const ListWrapper = styled.div`
  margin-top: 0.5rem;
`;
