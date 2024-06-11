import styled from "styled-components";

import { IconType } from "react-icons";
import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";

type Props = {
  Icon?: IconType;
  text: string;
  link?: string;
  onClick?: () => void;
};
//link props 에 다시 추가하기 ! (배포때문에 빼놨음)
const NavProfileBtn = ({ Icon, text, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
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
