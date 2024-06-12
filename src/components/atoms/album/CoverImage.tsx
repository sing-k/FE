import styled from "styled-components";

const CoverImage = ({ data }: any) => {
  return <Image src={data?.images[0]?.imageUrl} alt={data?.name} />;
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
