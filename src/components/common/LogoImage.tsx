import styled from "styled-components";

import Logo from "../../assets/img/singk-logo.png";

type Props = {
  width?: string;
};

const LogoImage = ({ width }: Props) => {
  return (
    <Container style={width ? { width } : {}}>
      <Image src={Logo} />
    </Container>
  );
};

export default LogoImage;

const Container = styled.div`
  width: 150px;
`;

const Image = styled.img`
  width: 100%;
`;
