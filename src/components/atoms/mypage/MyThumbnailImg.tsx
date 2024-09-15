import styled, { css } from "styled-components";

interface ImageProps {
  src: string;
  alt?: string;
  type: "IMAGE" | "YOUTUBE" | "ALBUM";
}

const MyThumbnailImg = ({ src, alt, type }: ImageProps) => {
  console.log(src);
  return (
    <ImageWrapper>
      {src && <StyledImage src={src} alt={alt} type={type} />}
    </ImageWrapper>
  );
};

export default MyThumbnailImg;
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
const StyledImage = styled.img<{ type: "YOUTUBE" | "IMAGE" | "ALBUM" }>`
  height: auto;

  ${({ type }) =>
    (type === "IMAGE" || type === "ALBUM") &&
    css`
      width: 50%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
    `}

  ${({ type }) =>
    type === "YOUTUBE" &&
    css`
      width: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
    `}
`;
