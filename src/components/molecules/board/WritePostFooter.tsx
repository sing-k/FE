import styled from "styled-components";

import color from "../../../styles/color";

const WritePostFooter = () => {
  return (
    <Container>
      <Inner>
        <Btn>미리보기</Btn>
        <Btn className="submit">등록</Btn>
      </Inner>
    </Container>
  );
};

export default WritePostFooter;

const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 6rem;
  background-color: ${color.COLOR_FOOTER};
`;

const Inner = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const Btn = styled.div`
  border: 1px solid ${color.COLOR_MAIN};
  background-color: white;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  cursor: pointer;

  &.submit {
    color: white;
    background-color: ${color.COLOR_MAIN};
  }
`;
