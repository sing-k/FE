import styled from "styled-components";

import color from "../../../styles/color";

type Props = {
  text: string;
};

const PostListHeader = ({ text }: Props) => {
  return <Container>{text}</Container>;
};

export default PostListHeader;

const Container = styled.div`
  background-color: ${color.COLOR_TRANSPARENT_WHITE};
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
