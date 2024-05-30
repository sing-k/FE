import { ReactNode } from "react";

import styled from "styled-components";

import { glassEffectStyle } from "../../styles/style";

type Props = {
  children: ReactNode;
  padding?: string;
};

const GlassBox = (props: Props) => {
  return (
    <Container style={props.padding ? { padding: props.padding } : {}}>
      {props.children}
    </Container>
  );
};

export default GlassBox;

const Container = styled.div`
  ${glassEffectStyle()}

  width: max-content;
  height: max-content;
  padding: 0.5rem;
  border-radius: 5px;
`;
