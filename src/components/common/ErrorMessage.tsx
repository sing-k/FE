import styled from "styled-components";
import color from "../../styles/color";
import { glassEffectStyle } from "../../styles/style";

import { BiSolidMessageRoundedError } from "react-icons/bi";

type Props = {
  message?: string;
};

const ErrorMessage = ({ message }: Props) => {
  return (
    <Container>
      <Wrapper>
        <ErrorIcon />

        <Text>시스템 오류</Text>
      </Wrapper>

      {message && <Message>{message}</Message>}
    </Container>
  );
};

export default ErrorMessage;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ErrorIcon = styled(BiSolidMessageRoundedError)`
  font-size: 2rem;
  color: ${color.COLOR_MAIN};
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

const Message = styled.p`
  color: ${color.COLOR_GRAY_TEXT};
`;
