import styled from "styled-components";

import color from "../../styles/color";

import { FaSadCry } from "react-icons/fa";

type Props = {
  message: string;
};

const EmptyMessage = ({ message }: Props) => {
  return (
    <Container>
      <FaSadCry />
      {message}
    </Container>
  );
};

export default EmptyMessage;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  gap: 10px;
  color: ${color.COLOR_GRAY_TEXT};
`;
