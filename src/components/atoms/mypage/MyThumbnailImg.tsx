import styled, { css } from "styled-components";

interface ImageProps {
  src: string;
  alt?: string;
  type?: "youtube" | "default";
}

const Image = ({ src, alt, type = "default" }: ImageProps) => {
  return (
    <ImageWrapper>
      <StyledImage src={src} alt={alt} type={type} />
    </ImageWrapper>
  );
};

export default Image;
const ImageWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  background-color: white;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-bottom: 1rem;
`;
const StyledImage = styled.img<{ type: "youtube" | "default" }>`
  height: auto;

  ${({ type }) =>
    type === "default" &&
    css`
      width: 50%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
    `}

  ${({ type }) =>
    type === "youtube" &&
    css`
      width: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
    `}
`;
