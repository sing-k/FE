import styled from "styled-components";

import color from "../../../styles/color";
import { dateFormat } from "../../../utils/date";

type Props = {
  createdAt: string;
};

const PostDay = ({ createdAt }: Props) => {
  return <Text>{dateFormat(createdAt)}</Text>;
};

export default PostDay;

const Text = styled.p`
  font-size: 0.8rem;
  color: ${color.COLOR_GRAY_TEXT};
`;
