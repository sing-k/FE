import styled from "styled-components";

import color from "../../../styles/color";

const AuthRequiredText = () => {
  return <Text>(필수)</Text>;
};

export default AuthRequiredText;

const Text = styled.span`
  font-size: 0.5rem;
  color: ${color.COLOR_BLUE_REQUIRED};
  font-weight: 700;
  margin-left: 5px;
`;
