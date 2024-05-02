import styled from "styled-components";

import color from "../../../styles/color";
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
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: auto;
`;
const Tags = styled.div`
  background-color: #ffffff9c;
  box-shadow: 1px 1px 8px #cdcccc9c;
  backdrop-filter: blur(10px);
  color: ${color.COLOR_GRAY_TEXT};
  width: 100%;
  height: 2vh;
  border-radius: 5px;
  margin: 2%;
  font-size: 0.5rem;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
