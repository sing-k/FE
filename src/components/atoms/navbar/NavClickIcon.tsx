import styled from "styled-components";

import { TbHandClick } from "react-icons/tb";

const NavClickIcon = () => {
  return (
    <Container>
      <TbHandClick size="1.8rem" color="#4e4e4e" />
      <Message>메뉴열기</Message>
    </Container>
  );
};

export default NavClickIcon;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Message = styled.div`
  font-size: 0.6rem;
  color: #4e4e4e;
  margin-top: 4px;
  white-space: nowrap;
`;
