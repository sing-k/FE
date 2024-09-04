import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";

type Props = {
  listHeaderText: string;
};

const HomePostListHeader = ({ listHeaderText }: Props) => {
  return <Container>{listHeaderText}</Container>;
};

export default HomePostListHeader;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  text-align: center;
  font-weight: bold;
  padding: 1rem;
  border-radius: 8px;
`;
