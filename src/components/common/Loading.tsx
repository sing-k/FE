import styled, { keyframes } from "styled-components";
import color from "../../styles/color";

const Loading = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const spin = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

const Spinner = styled.div`
  width: 50px;
  aspect-ratio: 1 /1;
  box-size: border-box;
  border: 5px solid ${color.COLOR_TRANSPARENT_WHITE};
  border-radius: 50%;
  border-top-color: ${color.COLOR_MAIN};

  animation: ${spin} 1s ease-in-out infinite;
`;
