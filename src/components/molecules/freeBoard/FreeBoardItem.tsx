import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import { pathName } from "../../../App";

import { FreePostType } from "../../../types/freePostType";

import { PostTitle } from "../../atoms";
import PostDay from "../../atoms/post/PostDay";
import UserInfo from "../../common/UserInfo";
import PostLikeComments from "../../atoms/post/PostLikeComments";

type Props = {
  data: FreePostType;
};

const FreeBoardItem = ({ data }: Props) => {
  const { title, writer, createdAt, like, comments, id } = data;

  const navigate = useNavigate();
  const goFreePostDetailPage = () => {
    navigate(`${pathName.board}/${id}`);
  };

  return (
    <Container onClick={goFreePostDetailPage}>
      <Contents>
        <Wrapper>
          <UserInfo nickname={writer.nickname} profileImage={writer.imageUrl} />

          <PostDay createdAt={createdAt} />
        </Wrapper>

        <Wrapper>
          <PostTitle title={title} />

          <PostLikeComments like={like.count} comments={comments} />
        </Wrapper>
      </Contents>

      <Border />
    </Container>
  );
};

export default FreeBoardItem;

const Container = styled.div`
  width: 100%;
  cursor: pointer;
`;

const Contents = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Border = styled.div`
  width: 100%;
  height: 1.5px;
  margin: auto;
  background: linear-gradient(to right, #6d56ff, #ffa1f6);
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
