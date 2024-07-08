import styled from "styled-components";

import color from "../../../styles/color";

import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

import UserInfo from "../../common/UserInfo";
import LikeBtn from "../../atoms/common/LikeBtn";
import CommentMenu from "./CommentMenu";

interface WriterType {
  id: string;
  profileImg?: string;
  nickname: string;
}

interface CommentType {
  id: string;
  writer: WriterType;
  createdAt: string;
  likes: number;
  content: string;
}

export interface DataType extends CommentType {
  recomment?: CommentType[];
}

interface PostCommentProps {
  data: DataType;
}

const Comment = (data: CommentType) => {
  return (
    <CommentWrapper>
      <Wrapper>
        <UserWrapper>
          <UserInfo
            profileImage={data.writer.profileImg}
            nickname={data.writer.nickname}
            size="S"
          />

          {data.createdAt}
        </UserWrapper>

        <CommentMenu />
      </Wrapper>

      <Wrapper style={{ alignItems: "flex-start" }}>
        <ContentsWrapper>
          <Contents>{data.content}</Contents>

          <ReCommentBtn>답글달기</ReCommentBtn>
        </ContentsWrapper>

        <LikeBtn />
      </Wrapper>
    </CommentWrapper>
  );
};

const PostComment = ({ data }: PostCommentProps) => {
  const { recomment, ...rest } = data;

  return (
    <Container>
      <Comment {...rest} />

      {recomment &&
        recomment.length > 0 &&
        recomment.map((recmt) => (
          <ReCommentWrapper key={recmt.id}>
            <MdOutlineSubdirectoryArrowRight color={color.COLOR_GRAY_TEXT} />

            <Comment {...recmt} />
          </ReCommentWrapper>
        ))}
    </Container>
  );
};

export default PostComment;

const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 0.8rem;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const CommentWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ReCommentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${color.COLOR_GRAY_TEXT};
  font-size: 0.8rem;
  gap: 10px;
`;

const ContentsWrapper = styled.div`
  margin-right: 1rem;
`;

const Contents = styled.p`
  font-size: 1rem;
  line-height: calc(1rem * 1.5);
`;

const ReCommentBtn = styled.p`
  margin-top: 0.6rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${color.COLOR_MAIN};
  cursor: pointer;
`;
