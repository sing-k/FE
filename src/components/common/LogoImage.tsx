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
      onClick={() => window.location.replace("/")}
    >
      <Image src={Logo} />
    </Container>
  );
};

export default LogoImage;

const Container = styled.div`
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
