import styled from "styled-components";

import color from "../../../styles/color";

import UserInfo from "../../common/UserInfo";
import { PostCommentNum, PostLikeNum } from "../../atoms";
import PostMenu from "../../molecules/board/PostMenu";

const PostInfo = () => {
  return (
    <>
      <Genre>[발라드]</Genre>

      <TitleWrapper>
        <Title>게시글 제목 부분</Title>

        <PostMenu />
      </TitleWrapper>

      <InfoWrapper>
        <UserInfo nickname="영벨롭" size="S" />

        <Date>2024-06-01</Date>

        <PostLikeNum />

        <PostCommentNum />
      </InfoWrapper>
    </>
  );
};

export default PostInfo;

const Genre = styled.p`
  font-weight: 600;
  color: ${color.COLOR_GRAY_TEXT};
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${color.COLOR_GRAY_TEXT};
  gap: 1rem;
`;

const Date = styled.span`
  font-size: 0.8rem;
`;
