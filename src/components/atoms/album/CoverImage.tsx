import styled from "styled-components";

const CoverImage = () => {
  return (
    <Image src="https://image.bugsm.co.kr/album/images/500/40940/4094086.jpg" />
  );
};

export default CoverImage;

const Image = styled.img`
  aspect-ratio: 1 / 1;
  display: inline-box;
  width: calc(100% * 2 / 3);
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;
