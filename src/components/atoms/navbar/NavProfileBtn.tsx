import styled from "styled-components";

import { IconType } from "react-icons";
import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";

type Props = {
  Icon?: IconType;
  text: string;
  link?: string;
};

const NavProfileBtn = ({ Icon, text, link }: Props) => {
  return (
    <Container>
      {Icon && <Icon />}
      {text}
    </Container>
  );
};

export default NavProfileBtn;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: ${color.COLOR_DARKGRAY_TEXT};
  padding: 0.5rem;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    ${glassEffectStyle()}
  }
`;
