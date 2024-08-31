import styled from "styled-components";
import { MyCommentRating, MyLikeRating } from "../../atoms";
import { LikeType } from "../../../types/postType";
import PostContentsPreview from "../../atoms/post/PostContentsPreview";
interface MyFreeBoardFooterType {
  content: string;
  like: LikeType;
  commentCount: number;
}
const MyFreeBoardFooter = ({
  content,
  like,
  commentCount,
}: MyFreeBoardFooterType) => {
  return (
    <Container>
      <PostContentsPreview contents={content} />
      <RatingDiv>
        <MyLikeRating likeCount={like.count} />
        <MyCommentRating commentCount={commentCount} />
      </RatingDiv>
    </Container>
  );
};

export default MyFreeBoardFooter;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
`;
const RatingDiv = styled.div`
  display: flex;
  gap: 0.2rem;
`;
