import styled from "styled-components";

import color from "../../../styles/color";

type TAuthInput = {
  name?: string;
  register?: any;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
};
const AuthInput = ({
  name,
  register,
  placeholder = "",
  type = "text",
  disabled,
}: TAuthInput) => {
  return (
    <Input
      {...register}
      name={name}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
    />
  );
};

export default AuthInput;

const Input = styled.input`
  font-size: 0.8rem;
  border: 1px solid ${color.COLOR_GRAY_BORDER};
  border-radius: 8px;
  width: 100%;
  height: 20%;
  padding: 2.5%;
  margin: 2% 0 2% 0;
  ::placeholder {
    color: ${color.COLOR_LIGHT_GRAY_PLACEHOLDER};
  }

  &:focus {
    outline: none;
  }
`;
