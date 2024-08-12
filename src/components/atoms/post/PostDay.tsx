import styled from "styled-components";

import color from "../../../styles/color";
import { dateTimeFormat } from "../../../utils/date";

type Props = {
  createdAt: string;
};

const PostDay = ({ createdAt }: Props) => {
  return (
    <Container>
      <Text>{dateTimeFormat(createdAt)}</Text>
    </Container>
  );
};

export default PostDay;

const Container = styled.div``;

const Text = styled.span`
  font-size: 0.7rem;
  color: ${color.COLOR_GRAY_TEXT};
`;
