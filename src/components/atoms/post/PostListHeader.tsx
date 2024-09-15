import styled from "styled-components";

import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";

type Props = {
  text: string;
};

const PostListHeader = ({ text }: Props) => {
  return <Container>{text}</Container>;
};

export default PostListHeader;

const Container = styled.div`
  width: 100%;
  ${glassEffectStyle()}
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.8rem 0;
  border-radius: 0.5rem;
  border: 1px solid ${color.COLOR_WHITE_BORDER};
`;
