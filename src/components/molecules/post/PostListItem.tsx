import styled from "styled-components";

import {
  PostCommentNum,
  PostLikeNum,
  PostTime,
  PostTitle,
  PostWriter,
} from "../../atoms";

import { glassEffectStyle } from "../../../styles/style";

const PostListItem = () => {
  return (
    <Container>
      <Contents>
        <Wrapper>
          <SmallWrapper>
            <PostWriter />

            <PostTime />
          </SmallWrapper>

          <SmallWrapper>
            <PostLikeNum />

            <PostCommentNum />
          </SmallWrapper>
        </Wrapper>

        <Wrapper>
          <PostTitle />
        </Wrapper>
      </Contents>

      <Border />
    </Container>
  );
};

export default PostListItem;

const Container = styled.div``;

const Contents = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  padding: 0.5rem 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Border = styled.div`
  width: 100%;
  height: 2.5px;
  background: linear-gradient(to right, #6d56ff, #ffa1f6);
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SmallWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
