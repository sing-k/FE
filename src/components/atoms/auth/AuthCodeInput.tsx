import styled from "styled-components";

import color from "../../../styles/color";

type TAuthInput = {
  name?: string;
  register?: any;
  placeholder?: string;
  type?: string;
};
const AuthCodeInput = ({
  name,
  register,
  placeholder = "",
  type = "text",
}: TAuthInput) => {
  return (
    <Input {...register} name={name} placeholder={placeholder} type={type} />
  );
};

export default AuthCodeInput;

const Input = styled.input`
  width: 100%;
  font-size: 0.8rem;
  background-color: #e8e8e8;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 2.5%;
  ::placeholder {
    color: ${color.COLOR_LIGHT_GRAY_PLACEHOLDER};
  }
  &:focus {
    outline: none;
    /* border: 1px solid ${color.COLOR_LIGHT_GRAY_PLACEHOLDER}; */
  }
`;
