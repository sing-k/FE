import styled, { keyframes } from "styled-components";

import color from "../../../styles/color";

type ChildProps = {
  size: string;
};

const RecordLine = ({ size }: ChildProps) => {
  return (
    <InnerCircleLine
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

const Record = () => {
  return (
    <Container>
      <InnerCircle />

      <RecordLine size="40%" />
      <RecordLine size="60%" />
      <RecordLine size="80%" />
    </Container>
  );
};

export default Record;

const rotate = keyframes`
100% {
    transform: rotate(360deg);
}
`;

const Container = styled.div`
  aspect-ratio: 1 / 1;
  width: calc(100% * 2 / 3);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  background: linear-gradient(
    to right,
    ${color.COLOR_RECORD_DARK},
    ${color.COLOR_RECORD_LIGHT},
    ${color.COLOR_RECORD_DARK}
  );
  animation: ${rotate} 5s linear infinite;
`;

const InnerCircle = styled.div`
  width: 30%;
  height: 30%;
  border-radius: 100%;
  background-color: ${color.COLOR_RECORD_CIRCLE};
`;

const InnerCircleLine = styled.div`
  position: absolute;
  border-radius: 100%;
  border: 1px solid ${color.COLOR_RECORD_LINE};
`;
