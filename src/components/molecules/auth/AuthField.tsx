import styled from "styled-components";

import {
  AuthLabel,
  AuthRequiredText,
  AuthInput,
  AuthValidMessage,
} from "../../atoms";

type TAuthInput = {
  text: string;
  name: string;
  register?: any;
  placeholder?: string;
  type?: string;
  errors?: any;
  children?: React.ReactNode;
};
// 컴포넌트 분리한건데 이 상태로 SignForm으로 불러서 사용하면 ref 관련 문제 생겨서 일단 보류
const AuthField = ({
  text,
  name,
  register,
  placeholder,
  type,
  errors,
  children,
}: TAuthInput) => {
  return (
    <Container>
      <FieldNameDiv>
        <AuthLabel text={text} />
        <AuthRequiredText />
      </FieldNameDiv>
      <AuthInput
        name={name}
        register={register}
        placeholder={placeholder}
        type={type}
      />
      {children}
      <ValidDiv>
        {errors[name] && <AuthValidMessage text={errors[name].message} />}
      </ValidDiv>
    </Container>
  );
};

export default AuthField;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 3% 0 3% 0;
  > div {
    padding: 1%;
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;
const FieldNameDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 2% 0 2% 0;
`;

const ValidDiv = styled.div`
  width: 100%;
  min-height: 10px;
`;
