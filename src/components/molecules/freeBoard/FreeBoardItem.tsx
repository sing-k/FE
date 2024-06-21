import styled from "styled-components";

import { PostCommentNum, PostLikeNum, PostWriter } from "../../atoms";

import PostDay from "../../atoms/post/PostDay";
import FreeBoardTitle from "../../atoms/freeBoard/FreeBoardTitle";
import FreeBoardContents from "../../atoms/freeBoard/FreeBoardContents";
import { glassEffectStyle } from "../../../styles/style";

const FreeBoardItem = () => {
  return (
    <Container>
      <Contents>
        <Wrapper>
          <SmallWrapper>
            <PostWriter />

            {/* <PostTime /> */}
          </SmallWrapper>

          <SmallWrapper>
            {/* <PostLikeNum />
            <PostCommentNum /> */}
            <PostDay />
          </SmallWrapper>
        </Wrapper>

        <Wrapper>
          <FreeBoardTitle />
        </Wrapper>

        <Wrapper>
          <FreeBoardContents />
          <SmallWrapper>
            <PostLikeNum />
            <PostCommentNum />
          </SmallWrapper>
        </Wrapper>
      </Contents>

      <Border />
    </Container>
  );
};

export default FreeBoardItem;

const Container = styled.div``;

const Contents = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  padding: 0.5rem 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  border-radius: 0.3rem;
`;

const Border = styled.div`
  width: 98%;
  height: 1.5px;
  margin: auto;
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
