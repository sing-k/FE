import styled from "styled-components";

import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";
//태그 하나씩 쓸지 아님 여기서 한꺼번에 쓸지 고민중
const NavbarTag = () => {
  return (
    <TagsDiv>
      <Tags>힙합</Tags>
      <Tags>R&B</Tags>
      <Tags>일렉트로닉</Tags>
    </TagsDiv>
  );
};

export default NavbarTag;
const TagsDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.3rem;
`;
const Tags = styled.div`
  ${glassEffectStyle()}
  color: ${color.COLOR_GRAY_TEXT};
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border-radius: 3px;
`;
