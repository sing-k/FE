import styled from "styled-components";

import Logo from "../../assets/img/singk-logo.png";

type Props = {
  width?: string;
  height?: string;
};

const LogoImage = ({ width, height }: Props) => {
  return (
    <Container
      style={
        width
          ? { width }
          : height
            ? { height }
            : {
                width: "150px",
              }
      }
    >
      <Image src={Logo} />
    </Container>
  );
};

export default LogoImage;

const Container = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
