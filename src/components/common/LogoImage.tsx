import styled from "styled-components";

import Logo from "../../assets/img/singk-logo.png";

type Props = {
  width?: string;
};

const LogoImage = (props: Props) => {
  return (
    <Container>
      <Image src={Logo} />
    </Container>
  );
};

export default LogoImage;

const Container = styled.div`
  width: 200px;
`;

const Image = styled.img`
  width: 100%;
`;
