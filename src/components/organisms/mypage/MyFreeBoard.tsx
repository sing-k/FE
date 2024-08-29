import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Text } from "../../common";
import { MyBoardHeader, MyFreeBoardFooter } from "../../molecules";
import { glassEffectStyle } from "../../../styles/style";
import color from "../../../styles/color";
import { useMyFreePostsQuery } from "../../../hooks/queries/freePost";
import { FreePostType } from "../../../types/freePostType";
import Loading from "../../common/Loading";
import ErrorMessage from "../../common/ErrorMessage";
import { pathName } from "../../../App";
const MyFreeBoard = () => {
  let offset = 0;
  let limit = 20;
  const { data, isLoading, isError, error } = useMyFreePostsQuery(
    offset,
    limit,
  );
  const navigate = useNavigate();
  if (isLoading || !data) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;

  const handelClickLink = (id: string) => {
    navigate(`${pathName.board}/${id}`);
  };
  return (
    <Container>
      {data?.items.map((card: FreePostType) => (
        <Card key={card.id} onClick={() => handelClickLink(card.id)}>
          <MyBoardHeader
            nickname={card.writer.nickname}
            createdAt={card.createdAt}
            imageUrl={card.writer.imageUrl}
          />
          <TextDiv>
            <Text color="black" size="1rem" bold={700}>
              {card.title}
            </Text>
          </TextDiv>
          <MyFreeBoardFooter
            content={card.content}
            like={card.like}
            commentCount={card.comments}
          />
        </Card>
      ))}
    </Container>
  );
};

export default MyFreeBoard;

const Container = styled.div`
  ${glassEffectStyle()}
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 1rem;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid;
  border-image: linear-gradient(
      to right,
      ${color.COLOR_GRADIENT_PURPLE},
      ${color.COLOR_GRADIENT_PINK}
    )
    1;
  &:hover {
    cursor: pointer;
  }
`;

const TextDiv = styled.div`
  padding: 0 0.5rem;
`;
