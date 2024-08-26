import styled from "styled-components";
import { Text } from "../../common";
import color from "../../../styles/color";
import { MyCommentRating, MyLikeRating } from "../../atoms";
import { LikeType } from "../../../types/postType";
import { stripHtmlTags } from "../../../utils/stripHtmlTag";
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
      <Text color={color.COLOR_GRAY_TEXT} size="0.7rem">
        {stripHtmlTags(content)}
      </Text>
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
